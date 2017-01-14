var express = require('express');
var router = express.Router();

/* User Details View  */
router.get('/user/:id', function(req, res, next) {
  res.user = User.find(req.user.id);
  next();
});

module.exports = router;
