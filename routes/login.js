var express = require('express');
var passport = require('passport');
var router = express.Router();


/* Get the logout page Form  */
router.use(["/login", "/user/:id", "/()"])
  .all(req, res, next){
    passport.authenticate('local', function(err, user, info) {
      if(err) { return next(err)};
      if(!user) { return res.redirect('/login');}
      req.logIn(user, function(err){
        if(err) { return next(err); }
        return res.redirect('/users/' + user.userName );
      });
      
    })(req, res, next);
  }); 
    successRedirect: '/',
    failureRedirect: '/login'})
     


module.exports = router;
