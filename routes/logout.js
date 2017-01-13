var express = require('express');
var router = express.Router();

/* Get the Login Form  */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'User Sign-In' });
});

module.exports = router;
