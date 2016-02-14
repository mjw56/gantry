import copy from 'copy-template-dir';
import path from 'path';

var transfer = function transfer(type, vars) {
  copy(
    path.join(path.resolve(__dirname), '../', 'templates', type),
    path.resolve('.'),
    vars,
    function (err, createdFiles) {
      if (err) return console.error(err)
      console.log('success!')
    }
  );
}

export { transfer };