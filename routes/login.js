var express = require('express');
var passport = require('passport');
var router = express.Router();


/* Get the logout page Form  */
router.route('/login')
  .all(req, res, next){
    passport.authenticate('local', function(err, user, info) {
      if(err) { return next(err)};
      if(!user) { return res.redirect('/login');}
    }), 
    successRedirect: '/',
    failureRedirect: '/login'})
     })
router.get('/sessionDistroy', function(req, res, next) {
  res.render('logout', { title: 'User Sign-In' });
});

module.exports = router;
