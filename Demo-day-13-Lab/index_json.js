const http = require('http');
const data = require('./data')
http.createServer((req,res)=>{
    res.write(JSON.stringify(data));
    res.end();    
}).listen(5000);