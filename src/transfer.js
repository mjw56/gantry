import copy from 'copy-template-dir';
import path from 'path';
import { Promise } from 'es6-promise';

var transfer = function transfer(config, vars) {
  return new Promise((resolve, reject) => {
    const {
      bundler,
      folder,
      library
    } = config;

    let opts;
    if (folder === 'project') {
      opts = ['../', 'templates', library];
    } else if (folder === 'config') {
      opts = ['../', 'templates', 'config', bundler.toLowerCase(), library];
    }

    copy(
      path.join(path.resolve(__dirname), ...opts),
      path.resolve('.'),
      vars,
      function copy(err, createdFiles) {
        if (err) {
          reject(err);
        }
        resolve('success!');
      }
    );
  });
}

export { transfer };