const http = require('http');

const server = http.createServer((req,res) => {});
//console.log(req.url, req.method, req.headers);; //understanding requests
//process.exit();
// const url =req.url;
// const method = req.method; // importing methods

server.listen(5100);
