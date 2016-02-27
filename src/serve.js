const spawn = require('cross-spawn');

export default function serve() {
  const output = spawn.sync('npm', ['run', 'start'], { stdio: 'inherit' });

  console.log(output);
}