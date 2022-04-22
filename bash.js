// import {pwd} from "./pwd.js"
const pwd = require('./pwd.js');
// const fs = require('fs');

 process.stdout.write('prompt > ');
 process.stdin.on('data', (data)=>{
     const cmd = data.toString().trim();
     if(cmd === 'pwd'){
        process.stdout.write(pwd());
     }
     process.stdout.write('\nprompt > ');
 })

 