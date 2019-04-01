// router of public things (images and things)

const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // app.use('/', express.static(dir));
  //var client = fs.readFileSync(path.resolve(__dirname, '../public/javascripts/client.js'), 'utf8');
  //   res.send(client)

  // ssres.send("JS");
  // console.log(express.static('public'));
  console.log(dir)
});



module.exports = router;
