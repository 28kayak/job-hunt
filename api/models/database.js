/**
 * Created by kaya on 7/7/2017.
 */
var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = "mongodb://sample-app:sample@ds011439.mlab.com:11439/jobhunt-sample";
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);
//Connection event
mongoose.connection.on('connected', function () {
   console.log('---- Mongoose connected to :' + dbURI + "----");
});
mongoose.connection.on('disconnect', function () {
   console.log("---- Mongoose Disconnected ----") ;
});

//bring in user schemas and models
require('./users');