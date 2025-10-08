const http=require ('http');
const fs= require('fs');
// function requestListener(req,res){
//   console.log(req);
// }
// http.createServer(requestListener);


const server=http.createServer(function requestListener(req,res){
  console.log(req);

  if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
  return res.end();

  }else if(req.url.toLocaleLowerCase()==='/submit-details' && req.method=='POST'){
   
    fs.writeFileSync('user.txt','puneet');
    res.statusCode=302;
    res.setHeader('Location', '/');

  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Hello ji</title></head>');
  res.write('<body><h1>learning Node</h1></body>');
  res.write('</html>');
  res.end();
});


http.createServer( (req,res)=>{
  console.log(req.url, req.headers,req.method);
});

const PORT=3000;

server.listen(PORT, ()=>{
  console.log(`Server is listening at http://localhost:${PORT}`);
});

