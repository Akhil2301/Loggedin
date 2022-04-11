var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.session.loggedIn){
    res.redirect('/home');
    //console.log('hi');    
  }
  else{
    res.render('index', { title: 'Login Page' });
   
  }  
});
const credential={
  email:'admin@gmail.com',
  password:'admin@123'
}
router.post('/submit',function (req,res){ 
  if(req.body.email==credential.email && req.body.password == credential.password){
     req.session.loggedIn=true;
     req.session.email=credential.email
     res.redirect('/home');
   //console.log('aha')
  }
  else{
    
    res.render('index', {invalid:true, err_msg: 'Enter the correct credintial' });
   
  }
  
  
})


module.exports = router;
