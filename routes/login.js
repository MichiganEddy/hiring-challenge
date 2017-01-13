var express = require('express');
var router = express.Router();

/* Get the logout page Form  */
router.get('/sessionDistroy', function(req, res, next) {
  res.render('logout', { title: 'User Sign-In' });
});

module.exports = router;
