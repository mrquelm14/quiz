var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) { //he borrado ,next
  res.render('index', { title: 'Quiz' });
//va a ser lo que saldra luego en index.ejs
});

module.exports = router;
