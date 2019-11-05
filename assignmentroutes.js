const requestHandler = (req,res)=>{
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Welcome Page</title><body>');
    res.write('<form action= "/welcomeuser" method = "POST" ><input  type="text" name="username"><button type= "submit">Submit</button></input></form> ');
    res.write('</body></head>');
    res.write('</html>');
    return res.end();
  }
  if(url ==='/welcomeuser' && method === "POST"){
    req.statusCode = 302;
    res.setHeader('Location','/newuser');
    const value = [];
//The below is data obtained from the request\
    req.on('data',(usrname)=>{
      value.push(usrname);
    });

    // //The below is data returned
     return req.on('data',(usrname)=>{
      value.push(usrname);
      const addusrname = Buffer.concat(value).toString();
      const displayusr = addusrname.split('=')[2];
      console.log(displayusr);
      res.write('<html>');
      res.write('<head><title>User Welcome Page</title><body><h1>Welcome!');
      res.write(displayusr);
      res.write('</h1></body></head>');
      res.write('</html>');
      res.end();
    });
  }
  if(url ==='/users'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Users Page</title><body><h1>Users Registered!</h1><li>Users Registered<ul>Hon Mcabee</ul><ul>Alexandree lupe</ul></li></body></head>');
    res.write('</html>');
    return res.end();
  }
  //console.log(req);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Welcome Page</title><body><h1>HI There Welcome!</h1></body></head>');
  res.write('</html>');
  res.end();
};

module.export = {
  handler:requestHandler};
