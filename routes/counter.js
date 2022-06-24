var express = require('express');
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('counter', {
        title: 'Hellooo', counter: (function () {
            counter = counter + 1;
            return counter;
        })()
    });
});

/* POST increase counter by 1. */
router.post("/increase-counter", function (req, res, next) {
    counter = counter + 1;
    res.redirect("/counter");
});


module.exports = router;
