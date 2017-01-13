var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session')({ 
      cookie: { maxAge: 60*60*4},
      secret: 'temporary_secret_salt', // Bcrypt Salts Need to be added!
      resave: true, saveUninitialized: true});
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt'); 


// DB Implentation not completed.
var db = require('./javascripts/db');


// Import the routes files. 
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var logout = require('./routes/logout');
var userShow = require('./routes/userView');
var newUser = require('./routes/newUser');
var newArticle = require('./routes/newArticle');
var articleShow = require('/routes/')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Simple Username Password Authentication Method.
passport.use(new Strategy(
  function(username, password, callback){
    db.users.findByUsername(username, function(err, user){
      if(err) { return callback(err); }
      if(!user) { return callback(null, false); }
      if(user.password !== password) { return callback(null, false); }
      return callback(null, user);
    });
}));

passport.serializeUser(function(user, callback){
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback){
  db.users.findById(id, function(err, user) {
    if(err) {return callback(err); }
    callback(null, user);
  });
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// Give all the routes to the app. 
app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('user/:id', userShow);
app.use('user/new', newUser);
app.use('article/new', newArticle);
app.use('article/:id', articleShow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
