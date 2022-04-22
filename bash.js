// import {pwd} from "./pwd.js"
// const {cwd} = require('process');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

 process.stdout.write('prompt > ');
 process.stdin.on('data', (data)=>{
     const cmd = data.toString().trim();
     const cmdArr= cmd.split(' ');
     
     if(cmd === 'pwd'){
        process.stdout.write(pwd());
        // console.log(pwd())
        //pwd
     }else if(cmd === 'ls'){
         ls();
     }else if(cmdArr[0] === 'cat' ){
         cat(cmdArr[1]);
     }
    //  process.stdout.write('\nYou typed: ' + cmd);
    //  process.stdout.write('\nprompt > ');
     
 })

 