import { transfer } from './transfer';
import chalk from 'chalk';
import { Promise } from 'es6-promise';
const exec = require('child_process').exec;

const install = function install(type, answers) {
  Promise.all([
    transfer({ folder: 'project', library: type }, answers),
  ]).then((res) => {
    npmInstall();
  })
  .catch((err) => console.log(err));
}

function npmInstall() {
  console.log(
    chalk.green.underline.bold(`\ninstalling node modules...`)
  );

  exec(`npm install`,
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