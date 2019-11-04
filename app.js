const http = require('http');

const server = http.createServer((req,res) => {
console.log(req.url, req.method, req.headers);; //understanding requests
//process.exit();
});

server.listen(5100);
