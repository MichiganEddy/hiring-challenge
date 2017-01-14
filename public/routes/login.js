var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');

var router = express.Router();



/* Get the logout page Form  */
router.use(["/login", "/user/:id", "/user/new-user", "/article/new-article", "/article/:id/edit", "/article/:id/delete", "/comment/new", "/comment/:id/edit", "/comment/:id/delete"], 
    function(req, res, next){
      passport.authenticate('local', function(err, user, info) {
      if(err) { return next(err)};
      if(!user) {
        res.flash('Error logging in.', 'Incorrect Username or Password.');
                  return res.redirect('/login');}
        req.logIn(user, function(err){
          if(err) { res.flash('Error Logging in.', 'User not found');
                    return next(err); }
        return res.redirect('/users/' + user.userName );
      });
      
    })(req, res, next);
  }); 
       


module.exports = router;
