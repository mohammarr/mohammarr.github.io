var express = require('express');
var router = express.Router();

var counter = 0;

function getStartEndOfDay() {
  let yesterday = new Date();
  yesterday = yesterday.setDate(yesterday.getDate() - 1);
  let s = new Date(new Date(yesterday).setUTCHours(-7, 0, 0, 0));
  let e = new Date(new Date(yesterday).setUTCHours(16, 59, 59, 99));
  return [s.toISOString(), e.toISOString()]
}

var [startTime, endTime] = getStartEndOfDay()
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mohammad Ammar Ramadhan', counter: (function () {
      counter = counter + 1;
      return counter;
    })()
  });
});

router.get('/date', function (req, res, next) {
  res.render('date', {
    title: 'Mohammad Ammar Ramadhan',
    now: new Date(),
    yesterday: new Date(new Date().setDate(new Date().getDate() - 1)),
    startTime: startTime,
    endTime: endTime
  });
});


module.exports = router;
