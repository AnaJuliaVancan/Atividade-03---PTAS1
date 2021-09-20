var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listagemRouter = require('./routes/listagem');
var noticia1Router = require('./routes/noticia1');
var noticia2Router = require('./routes/noticia2');
var noticia3Router = require('./routes/noticia3');
var noticia4Router = require('./routes/noticia4');
var noticia5Router = require('./routes/noticia5');
var noticia6Router = require('./routes/noticia6');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listagem', listagemRouter);
app.use('/noticia1', listagemRouter);
app.use('/noticia2', listagemRouter);
app.use('/noticia3', listagemRouter);
app.use('/noticia4', listagemRouter);
app.use('/noticia5', listagemRouter);
app.use('/noticia6', listagemRouter);

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
