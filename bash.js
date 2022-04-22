const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

 process.stdout.write('prompt > ');
 process.stdin.on('data', (data)=>{
     const cmd = data.toString().trim();
     const cmdArr = cmd.split(' ');
     
     if(cmd === 'pwd'){
        process.stdout.write(pwd());
     }
     else if(cmd === 'ls'){
         ls();
     }
     else if(cmdArr[0] === 'cat' ){
         cat(cmdArr[1]);
     }
     process.stdout.write('\nprompt > ');
     
 })