#!/usr/bin/env node
'use strict';

import program from 'commander';
import inquirer from 'inquirer';
import {questions} from './questions';

program
  .option('-t, --type <app>', 'The application type to install')
  .parse(process.argv);

if (program.type) {

  if (!program.type) {
    process.exit(0);
  }

  questions(program.type);
}