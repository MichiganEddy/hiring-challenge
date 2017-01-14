var express = require('express');
var router = express.Router();

/* Article Details View  */
router.get('/article/:id', function(req, res, next) {
  article = articleFind(res.article.id) | null; //Article Find method not implemented yet.
  if(article) {res.article = article;
    next();
  }
  next(new error("Database lookup error."))
});

module.exports = router;
