/**
 * Created by kaya on 7/7/2017.
 */
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

/*=== Registration API Controller ===*/
module.exports.register = function(req,res) {
    var user = new User();
    //get data from the submitted form !!!! input validation will be needed !!!!!
    user.name = req.body.name;
    user.email = req.body.email;
    //call the setPassword method to add the salt and the hash to the instance
    user.setPassword(req.body.password);
    //save the instance as a record to the database
    //generate jwt and send it
    //!!!! ERROR Handling is needed !!!!!!
    user.save(function (err) {
       var token;
       token = user.generateJWT();
       res.status(200);
       res.json({"token": token});
    });
};// end of register
module.exports.login = function (req,res) {
    passport.authenticate('local', function (err, user, info) {
       var token;
       //if passport throw/ catches an error
        if(err)
        {
            res.status(404).json(err);
            return;
        }
        //if user is found
        if(user)
        {
            res.status(200);
            res.json({
                "token": token
            });
        }
        else
        {
            //if user is not found
            res.status(401).json(info);
        }
    })(req, res);
};//end of login
