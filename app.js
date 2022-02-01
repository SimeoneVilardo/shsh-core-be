var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRouter);

app.use(function (req, res, next) {
  next({ status: 404, message: 'Not found' });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ status: err.status || 500, message: err.message || 'Server error' });
});

module.exports = app;
