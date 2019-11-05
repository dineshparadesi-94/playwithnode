const fs = require('fs'); //file system

const requestHandler = (req,res)=>{
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Welcome Page</title>');
    res.write('<body><form action = "/message" method="POST"><input type="text" name=message><button type="submit">Submit</button></form></body></head>');
    res.write('</html>');
    return res.end();   //after res.end -> res.write should not be used so return :)
  }
  if(url === '/message' && method === "POST"){
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    }); //event listening -> this case data event -> this is fired when a new chunk is ready
    return req.on("end",()=> {
      const parsebody = Buffer.concat(body).toString(); // Works with text only
      console.log(parsebody);
      const message =parsebody.split('=')[1];
      fs.writeFile('message.txt',message,err=> {
        res.statusCode = 302; // The status code is for redirectering url
        res.setHeader('Location','/');
        return res.end();
      });
      //fs.writeFileSync('message.txt',message);// This is stop the next line untill executed

    });

  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Response Page</title>');
  res.write('<body>Hello there from Nodejs Server!</body></head>');
  res.write('</html>');
  res.end();
};

module.export = {
                  handler:requestHandler,
                  someText : 'Hard coded text'
};
