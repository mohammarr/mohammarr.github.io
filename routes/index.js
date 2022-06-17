var express = require('express');
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hellooo', counter: (function () {
      counter = counter + 1;
      return counter;
    })()
  });
});



module.exports = router;
