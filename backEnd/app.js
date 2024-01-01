import logger from 'morgan';
import createError from 'http-errors';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';


const { connect} = mongoose;
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
    connect('mongodb://localhost:27017/issues');
    console.log("Connected to DB")
  } catch(error) {
    console.log(console.log('Connection error', error))
  }

app.use("/issues",router);

// catch 404 and forward to error handler
app.use((req, res, next) => { // arrow function used for ES2015 module
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {  // arrow function used for ES2015 module
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;

























/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var router = require('./routes/routes.js');
var cors = require('cors');

const { connect} = mongoose;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


try {
  connect('mongodb://localhost:27017/issues');
  console.log("Connected to DB")
  app.listen(3000, () => {
      console.log("server is running at 3000")
  })
} catch(error) {
  console.log(console.log('Connection error', error))
}

app.use("/issues",router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/