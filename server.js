// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {JSDOM } = require('jsdom');
const fs = require("fs");

const path = require('path');

//const getDate = require('./ajax/getDate');

const viewsRouter = require('./routes/views');
// const publicRouter = require('./routes/public');

app.use('/', viewsRouter);
// app.use('/public', publicRouter);

// static files express implementation
app.use(express.static(path.join(__dirname, 'public')));


app.get('/ajax-getDate', function () {
    console.log('test')
});

// for page not found (i.e., 404)
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
  });
  
  // RUN SERVER
  let port = 9000;
  app.listen(port, function () {
      console.log('Food over Waste is listening ' + port + '!');
  });
  
  module.exports = app;

module.exports = app;