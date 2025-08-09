const express = require('express')
const route=require('./routes/routes')

const app = express()
const port=3000

app.use(express.json());  // a MIDDLEWARE for convertung a json into a valid js object

//custom middleware
// const loggingMiddleware=function(req,res,next){
// console.log('Logging in');
// next();
// }

// app.use(loggingMiddleware);

// const authMiddleware=function(req,res,next){
//   console.log('authorizing');
//   next();
// }

// app.use(authMiddleware);
// const validationMiddleware=function(req,res,next){
//   console.log('validating ');
//   next();
// }
// app.use(validationMiddleware);


//mounting the routes
app.use('/api',route)

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('hello world')
})

app.listen(port, ()=>{
  console.log(`Example is running at port ${port}`)
})