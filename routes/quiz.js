var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
var newpath = __dirname.split("/").slice(0, -1).join("/");
var template

fs.readFile(path.join(newpath, 'soal/7dc3a190fcf611ecb611f098749de89b.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    template = JSON.parse(data);
  });

var benar = 0;
var salah = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('quiz', (function () {
        var i = Math.floor(Math.random() * template.length);
        return {
            title: 'Hellooo',
            soal: template[i]['soal']['soal-text'],
            p1: template[i]['soal']['options'][0][1],
            p2: template[i]['soal']['options'][1][1],
            p3: template[i]['soal']['options'][2][1],
            p4: template[i]['soal']['options'][3][1],
            p5: template[i]['soal']['options'][4][1],
            problem_id: i,
            benar: benar,
            salah: salah
        }
    })()
    );
});

/* POST increase counter by 1. */
router.post("/check-answer", function (req, res, next) {
    console.log(req.body);
    correct = req.body['answer'] === template[parseInt(req.body['problem-id'])]['soal']['jawaban']
    if (correct){
        benar += 1;
    } else {
        salah -= 1;
    }
    res.json({
        "correct": correct
    });
});

module.exports = router;
