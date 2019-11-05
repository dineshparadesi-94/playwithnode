const http = require('http');

const routes = require('./routes');//custom

const server = http.createServer(routes.handler);
//console.log(req.url, req.method, req.headers);; //understanding requests
//process.exit();
// const url =req.url;
// const method = req.method; // importing methods

server.listen(5100);
