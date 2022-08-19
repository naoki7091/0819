var express = require('express');
var router = express.Router();

let discord_numdatas = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '2022年8月19日資料',
    discord_numdatas: discord_numdatas,
  });
});

router.get('/main', function(req, res, next) {
  res.render("discordnum",{
    discord_numdatas: discord_numdatas,
  })
});

router.get('/ooishi', function(req, res, next) {
  res.render("ooishi")
});

// postを受け取る
router.post('/', function(req, res, next) {
  const num =req.body.add;
  discord_numdatas.push(num);
  res.redirect('/');
});


module.exports = router;
