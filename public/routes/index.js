var express = require('express');
var router = express.Router();

/* GET articles listing page. */
router.param( ['/', '/articles', '/index', '/home'], function(req, res, next) {
  res.render('index', { title: 'Latests Posts' });
});

module.exports = router;
