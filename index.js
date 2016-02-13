#!/usr/bin/env node --harmony
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var chalk = require('chalk');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

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
  moveApp(program.type);
}

function moveApp(type) {
  console.log('gantry location:' + path.resolve(__dirname) + ' users location ' + path.resolve('.'));
  
  mkdirp(path.join(path.resolve('.'), 'react'), function (err) {
    if (err) console.error(err)
    else console.log('pow!')
  });

  var source = fs.createReadStream(path.join(path.resolve(__dirname), 'lib', 'react'));
  var dest = fs.createWriteStream(path.join(path.resolve('.'), 'react'));

  source.pipe(dest);
  source.on('end', function() { 
    console.log('files copied');
  });
  source.on('error', function(err) {
    console.log('error!');
  });
}