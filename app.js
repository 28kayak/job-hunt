/**
 * Created by kaya on 7/7/2017.
 */
/* import libraries */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

//bring the data model
require('./api/models/database');
require('./api/config/passport');

var routesApi = require('./api/routes/index');
var app = express();
app.use(passport.initialize());
app.use('/api', routesApi);