import inquirer from 'inquirer';
import { transfer } from './transfer';

exports.questions = function questions(type) {
  // TODO: these questions will be based on type
  inquirer.prompt([
    {
      when: function(name){ return name; },
      type: 'input',
      name: 'name',
      message: 'Would you like to name your app?',
      default: 'prototype'
    },
    {
      when: function(name){ return name; },
      type: 'input',
      name: 'description',
      message: 'What is the description of the app?',
      default: 'A new prototype'
    },
    {
      type: 'confirm',
      name: 'rxjs',
      message: 'Would you like to use ESLint?',
      default: true
    },
    {
      type: 'confirm',
      name: 'tests',
      message: 'Would you like to include tests?',
      default: true
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Would you like to use TypeScript?',
      default: false
    },
    {
      type: 'confirm',
      name: 'immutable',
      message: 'Would you like to use ImmutableJS?',
      default: false
    },
    {
      type: 'confirm',
      name: 'redux',
      message: 'Would you like to use Redux?',
      default: false
    },
    {
      type: 'confirm',
      name: 'rxjs',
      message: 'Would you like to use RxJS?',
      default: false
    }
  ], transfer.bind(this, type))
}