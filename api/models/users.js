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
var secret = "sjsu4321";


/*User Schema*/
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

/* define set password method */
userSchema.methods.setPassword = function (password) {

    /*randomeByte generates cryptographically strong pseudo-random data. */
    this.salt = crypt.randomBytes(16).toString('hex');
   /*pdkdf2sync(password, salt, iteration, key length, digest) gives a synchronous Password-Based Key derivation Function 2
   * a selected HMAC digest algorithms specified by digest is applied to derive a key of the requested byte length from password, salt, and iteration
   */
    this.hash = crypt.pbkdf2sync(password, this.salt, 1000, 64).toString('hex');

};//end of set password

/* define check password method */
userSchema.methods.validatePassword = function (password) {
    //generate hash based on given password and salt.
    var hash = crypt.pdkdf2sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash = hash;
};//validatePassword
userSchema.methods.generateJWT = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign( {
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime()/1000) }, secret );
};//generateJWT


//export User Schema as mongoose.model named User
mongoose.model('User', userSchema);