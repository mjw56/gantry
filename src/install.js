import { transfer } from './transfer';
import chalk from 'chalk';
import { Promise } from 'es6-promise';
const spawn = require('cross-spawn');

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

  const output = spawn.sync(`npm`, ['install'], { stdio: "inherit" });

  console.log(output);
}

export { install };