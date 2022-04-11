var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  
  //console.log(user);
  if (req.session.loggedIn){
    let user=req.session.email;
    res.render('home',{user});
  }
  else{
    res.render('index');
  }
  
});


router.get('/logout',(req,res)=>{
  
  //res.Cookies.Clear();
  req.session.destroy((err)=>{
      if(err){
          console.log(err);
          res.send('Error')
      }else{
          res.render('index',{invalid:true,err_msg:'Logout successfully.'});
          
      }
  })

  
})


module.exports = router;
