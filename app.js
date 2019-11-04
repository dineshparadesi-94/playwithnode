const http = require('http');
const fs = require('fs'); //file system
const server = http.createServer((req,res) => {
//console.log(req.url, req.method, req.headers);; //understanding requests
//process.exit();

const url =req.url;
const method = req.method; // importing methods
if(url === '/'){
  res.write('<html>');
  res.write('<head><title>Welcome Page</title>');
  res.write('<body><form action = "/message" method="POST"><input type="text" name=message><button type="submit">Submit</button></form></body></head>');
  res.write('</html>');
  return res.end();   //after res.end -> res.write should not be used so return :)
}
if(url === '/message' && method === "POST"){
fs.writeFileSync('message.txt','Hi There');
res.statusCode = 302; // The status code is for redirectering url
res.setHeader('Location','/');
return res.end();
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>Response Page</title>');
res.write('<body>Hello there from Nodejs Server!</body></head>');
res.write('</html>');
res.end();
});

server.listen(5100);
