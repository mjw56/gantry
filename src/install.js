import { transfer } from './transfer';
import chalk from 'chalk';
import { Promise } from 'es6-promise';
const spawn = require('child_process').spawn;

const install = function install(answers) {
  Promise.all([
    transfer(answers),
  ]).then((res) => {
    npmInstall();
  })
  .catch((err) => console.log(err));
}

function npmInstall() {
  console.log(
    chalk.green.underline.bold(`\ninstalling node modules...`)
  );

  spawn(`npm`, ['install'], {});
}

export { install };