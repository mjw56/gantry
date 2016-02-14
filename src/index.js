#!/usr/bin/env node
'use strict';

import program from 'commander';
import inquirer from 'inquirer';
import {questions} from './questions';

program
  .option('-t, --type <app>', 'The application type to install')
  .parse(process.argv);

if (program.type) {
  questions(program.type);
} else {
  process.exit(0);
}