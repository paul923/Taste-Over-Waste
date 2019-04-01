// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {JSDOM } = require('jsdom');
const fs = require("fs");

const path = require('path');

//const getDate = require('./ajax/getDate');

const viewsRouter = require('./routes/views');
const publicRouter = require('./routes/public');

app.use('/', viewsRouter);
app.use('/public', publicRouter);

app.get('/ajax-getDate', function () {
    console.log('test')
});

module.exports = app;