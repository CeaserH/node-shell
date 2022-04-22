/*import { cwd } from 'process';

const pwd = function (){
    return `${cwd()}`;
}
export{pwd}
*/

const {cwd} = require('process');

module.exports = function () {
  return `${cwd()}`;
};

