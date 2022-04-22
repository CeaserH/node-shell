import { cwd } from 'process';

module.exports = pwd(){
    return `${cwd()}`;
}
// export{pwd}