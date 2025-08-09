 const express = require('express')
const router = express.Router()

//middlewares

const auth=function(req,res,next){
  console.log("i am inside a auth middleware");

  req.user={ userID:1, role: "student"};
  if(req.user){

    //if valid user
    next();
  }
  else{

    //if not a valid user
    res.json({
      success:false,
      message:"Not a valid user",
    })
  }
}

//is Student
const isStudent=function(req,res,next){
  console.log("I am inside student middleware");

  if(req.user.role==="student"){
    next();
  }
  else{
    res.json({
      success: false,
      message:"Access denied, this route is only for studs"
    })
  }
}

//is ADMIN

const isAdmin=function(req,res,next){
  console.log("i am inside admin middleware");

  if(req.user.role==="admin"){
    next();
  }
  else{
    res.json({success:false,
      message:"access denied! only for admin"
      
    })
    
  }
}

// define the home page route
router.get('/student',auth,isStudent, (req, res) => {
  console.log("Inside stud route")
  res.send('Inside Student page')
})


router.get('/admin',auth,isAdmin, (req, res) => {
  console.log("Inside admin route")
  res.send('Inside Admin page')
})

module.exports = router