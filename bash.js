// import { cwd } from 'process';

import {pwd} from "./pwd.js"
// const pwd = require("./pwd.js");

 process.stdout.write('prompt > ');
 process.stdin.on('data', (data)=>{
     const cmd = data.toString().trim();
     if(cmd === 'pwd'){
        process.stdout.write(pwd());
        // console.log(pwd())
     }
     process.stdout.write('\nYou typed: ' + cmd);
     process.stdout.write('\nprompt > ');
 })

 