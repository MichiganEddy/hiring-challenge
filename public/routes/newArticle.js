var express = require('express');
var router = express.Router();

/* Get the new Article Form  */
router.get('/article/new', function(req, res, next) {
  res.render('new-article', { title: 'Publish Article' });
});

module.exports = router;
