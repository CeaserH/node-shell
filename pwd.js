const {cwd} = require('process');

module.exports = function () {
  return `${cwd()}`;
};

