const path = require('path');

const filePath = path.join(__dirname,'gfg.txt');
console.log(filePath);

const fileName = path.basename(filePath);
console.log(fileName);

const dirName = path.dirname(filePath);
console.log(dirName);