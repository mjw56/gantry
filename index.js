#!/usr/bin/env node --harmony
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var chalk = require('chalk');

program
  .option('-t, --type <app>', 'The application type to install')
  .action(function(file) {
    co(function *() {
      var type = yield prompt('type: ');
      console.log(chalk.bold.cyan('type: %s file: %s', type, file));
      process.exit(0);
    });
  })
  .parse(process.argv);

if (program.type) {
  console.log('user entered type', program.type)
  // TODO: create function to move files to users local directory
}