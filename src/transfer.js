import copy from 'copy-template-dir';
import path from 'path';
import { Promise } from 'es6-promise';

const transfer = function transfer(config) {
  return new Promise((resolve, reject) => {
    const {
      app
    } = config;

    const opts = ['../', 'templates', app];

    copy(
      path.join(path.resolve(__dirname), ...opts),
      path.resolve('.'),
      config,
      (err, createdFiles) => {
        if (err) {
          reject(err);
        }
        resolve('success!');
      }
    );
  });
};

export { transfer };
