import copy from 'copy-template-dir';
import path from 'path';
import { Promise } from 'es6-promise';

var transfer = function transfer(config, vars) {
  return new Promise((resolve, reject) => {
    const {
      library
    } = config;

    const opts = ['../', 'templates', library];

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