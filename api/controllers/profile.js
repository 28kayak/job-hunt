/**
 * Created by kaya on 7/7/2017.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req,res){
    if (! req.payload._id)
    {
        res.stauts(401).json({
            "messege": "Unauthorized Error: private profile"
        });
    }
    else
    {
        User
            .findById(req.payload._id)
            .exec(function (err, user) {
                res.status(200).json(user);
            });
    }

};// end of profile-read
