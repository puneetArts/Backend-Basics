const http=require ('http');

// function requestListener(req,res){
//   console.log(req);
// }
// http.createServer(requestListener);


const server=http.createServer(function requestListener(req,res){
  console.log(req);
});


http.createServer( (req,res)=>{
  console.log(req.url, req.headers,req.method);
});

const PORT=3000;

server.listen(PORT, ()=>{
  console.log(`Server is listening at http://localhost:${PORT}`);
});

