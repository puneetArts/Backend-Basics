const express=require('express'); //put express in your bag containing all the mpodules
const app= express();            // initialize the express app

const port =3000;    //var that stores the port

app.get('/' ,(req,res)=>{                     
  res.send("Get request received")
})
//request -- get / put / post / delete
// path- /, /about, /article...

//start your app or server

app.listen(port,()=>{                                // binding application to a specific port number
     console.log("application start ho gayi hai");
});
