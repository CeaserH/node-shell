// import { cwd } from 'process';
const cwd = require('process');

module.exports = function pwd (){
    return cwd.cwd();
}

// function pwd(){
//     return `${cwd()}`;
// }
// export{pwd}