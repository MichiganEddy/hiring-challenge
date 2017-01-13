var express = require('express');
var router = express.Router();

/* Get New User Form. */
router.get('/user/new', function(req, res, next) {
  res.render('user-signup', { title: 'User Registration' });
});

module.exports = router;
