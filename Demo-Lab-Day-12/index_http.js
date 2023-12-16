const http = require('http');
const server = http.createServer((req,res) =>{
    // res.writeHead(200, {'Content-Type':'/text/plain'});
    res.end('<h1>Hello GFG, This is GFG Class</h1>');
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});