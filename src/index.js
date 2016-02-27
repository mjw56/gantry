#!/usr/bin/env node
'use strict';

import program from 'commander';
import inquirer from 'inquirer';
import { questions } from './questions';
import serve from './serve';

program
  .option('-i, --install', 'Install an Application')
  .option('-s, --serve', 'Serve an Application') 
  .parse(process.argv);

if (program.install) {
  questions();
} else if (program.serve) {
  serve();
}
