import inquirer from 'inquirer';
import { install } from './install';
import config from './configs/questions';

const questions = function questions() {
  inquirer.prompt(
    config.app,
    install.bind(this)
  );
};

export { questions };
