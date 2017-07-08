/**
 * Created by kaya on 7/7/2017.
 */
/*
* Define user's schema
*
* Note:
* hash = user password + salt
* one way encryption
* */
/*import libraries */
var mongoose = require("mongoose");
var crypt = require("crypt");
var jwt = require("jsonwebtoken");



var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String

});//end of schema
