import inquirer from 'inquirer';
import { install } from './install';
import config from './configs/questions';

const questions = function questions(type) {
  // TODO: these questions should be based on type
  inquirer.prompt(
    config.app.concat(config.tools[type]), 
    install.bind(this, type)
  );
}

export { questions };