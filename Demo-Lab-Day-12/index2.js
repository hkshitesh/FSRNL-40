const fs = require('fs');
fs.writeFileSync('gfg.txt',"Hello GFG, This is FS Class");

const content = fs.readFileSync('gfg.txt','utf-8');
console.log("File Content",content);

fs.appendFileSync('gfg.txt',"This is Node JS FS topic");

const updatedContent = fs.readFileSync('gfg.txt','utf-8');
console.log('updated file content',updatedContent)

