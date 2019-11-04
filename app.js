const http = require('http');

const server = http.createServer((req,res) => {
//console.log(req.url, req.method, req.headers);; //understanding requests
//process.exit();

res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Response Page</title>');
res.write('<body>Hello there from Nodejs Server!</body></head>');
res.write('</html>');
res.end();
});

server.listen(5100);
