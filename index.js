const nodemon = require('nodemon');

nodemon({
  watch: ['serv'],
  ext: 'ts,json',
  ignore: ['serv/**/*.spec.ts'],
  exec: 'yarn --cwd ./serv start',
});

// nodemon({
//   watch: ['app'],
//   ext: 'ts,json',
//   ignore: ['app/**/*.spec.ts'],
//   exec: 'yarn --cwd ./app start',
// });