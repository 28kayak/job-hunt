/**
 * Created by kaya on 7/7/2017.
 */
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
     secret: "secret",
    userProperty: 'payload'
    });
// import files in controllers
//profile.js
var ctrlProfiel = require('../controllers/profile');
//authentication.js
var ctrlAuth = require('../controllers/authentication');

//be profile ready
router.get('/profile', auth, ctrlProfiel.profileRead);
//be authentication ready
router.post('/register',ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;