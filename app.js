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


console.log("--------- bring user-defined modules --------------");
//bring the data model
require('./api/models/database');
//bring the passport config after model is defined
require('./api/config/passport');
console.log("-------- bring router ------------------------------");
var routesApi = require('./api/routes/index');
var app = express();
console.log("------ initialize passport -------------------------");
app.use(passport.initialize());
app.use('/api', routesApi)


//application
console.log("============= application =======================");
app.get('*', function (req,res) {
    console.log(__dirname + "/view/index.html");
    res.sendFile(__dirname + "/view/index.html");
})



app.listen('3000', function (req,res){
    console.log("==================== application is running at 3000 ======================");
})