#!/usr/bin/env node
'use strict';

import program from 'commander';
import inquirer from 'inquirer';
import { questions } from './questions';
import blessed from 'blessed';
import contrib from 'blessed-contrib';

program
  .parse(process.argv);

questions();
