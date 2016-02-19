import { transfer } from './transfer';
import chalk from 'chalk';
import { Promise } from 'es6-promise';
const exec = require('child_process').exec;

const install = function install(type, answers) {
  Promise.all([
    transfer({ folder: 'project', library: type }, answers),
  ]).then((res) => {
    const { 
      dependencies = {}, 
      devDependencies = {} 
    } = require(`./configs/${type}.js`).default;

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

  const save = (type === 'dependencies') ? '--save' : '--save-dev';

  exec(`npm install ${deps} ${save}`,
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