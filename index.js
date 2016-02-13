#!/usr/bin/env node --harmony
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var chalk = require('chalk');
var path = require('path');
var fs = require('fs-extra');

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

  moveApp(program.type);
}

function moveApp(type) {
  console.log('gantry location:' + path.resolve(__dirname) + ' users location ' + path.resolve('.'));

  fs.copy(
    path.join(path.resolve(__dirname), 'lib', 'react'),
    path.join(path.resolve('.'), 'react'),
    function (err) {
      if (err) return console.error(err)
      console.log('success!')
    }
  );
}