var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticia6/index', { title: 'Express' });
});

module.exports = router;