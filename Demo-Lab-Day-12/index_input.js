const fs = require('fs');

const input = process.argv;
//console.log(input[3]);

fs.writeFileSync(input[2],input[3]);