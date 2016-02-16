import { transfer } from './transfer';
import chalk from 'chalk';
import objectAssign from 'object-assign';
import { Promise } from 'es6-promise';
const exec = require('child_process').exec;

const install = function(type, answers) {
  const moduleBundler = require(`./configs/${answers.moduleBundler.toLowerCase()}`).default;
  const transpiler = answers.transpiler.toLowerCase();

  Promise.all([
    transfer({ folder: 'project', library: type }, answers),
    transfer(
      { 
        folder: 'config', 
        library: type, 
        bundler: answers.moduleBundler 
      }, 
      moduleBundler[type].config[transpiler]
    )
  ]).then((res) => {
    const { 
      dependencies = {}, 
      devDependencies = {} 
    } = require(`./configs/${type}.js`).default;

    objectAssign(
      dependencies, 
      moduleBundler[type].dependencies[answers.transpiler.toLowerCase()],
      moduleBundler[answers.moduleBundler.toLowerCase()]
    );

    const depsStr = constructDeps(dependencies);
    const devDepsStr = constructDeps(devDependencies);

    if (depsStr) {
      npmInstall(depsStr, 'dependencies');
    }

    if (devDepsStr) {
      npmInstall(devDepsStr, 'devDependencies');
    }
  })
  .catch((err) => console.log(err));
}

function constructDeps(deps) {
  let depsStr = '';
  Object.keys(deps).forEach((key) => {
    depsStr += deps[key] + ' ';
  });
  return depsStr;
}

function npmInstall(deps, type) {
  console.log(
    chalk.green.underline.bold(`\ninstalling ${type}....`)
  );

  exec(`npm install ${deps} --save-dev`,
    (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    }
  );
}

export { install };