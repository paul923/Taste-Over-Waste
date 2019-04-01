// router of public things (images and things)

const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs');


/* GET users listing. */
router.get('/img', function(req, res, next) {
  var img = fs.readFileSync(path.resolve(__dirname, '../public/images'), 'utf8');
  res.send(img);
  // app.use('/', express.static(dir));
  //var client = fs.readFileSync(path.resolve(__dirname, '../public/javascripts/client.js'), 'utf8');
  //   res.send(client)

  // ssres.send("JS");
  // console.log(express.static('public'));
  console.log(dir)
});

router.get('/css', function(req, res, next) {
  var css = fs.readFileSync(path.resolve(__dirname, '../public/css'), 'utf8');
  res.send(css);
  // app.use('/', express.static(dir));
  //var client = fs.readFileSync(path.resolve(__dirname, '../public/javascripts/client.js'), 'utf8');
  //   res.send(client)

  // ssres.send("JS");
  // console.log(express.static('public'));
  console.log(dir)
});



module.exports = router;
