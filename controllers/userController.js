const db = require('../models/index');

const orm = {
    addUser: function(userInfo, callback){
        console.log('running addUser()');
        console.log(userInfo);
        this.getUserByEmail(userInfo.email, function(err, result){
            if (!result){
                console.log('User not found. Creating user...');
                db.User.create(userInfo, function(err, response){

                    callback(err, response);
                });
            } else {
                if (err){
                    console.log(err);
                } else {
                    console.log('User found...');
                    callback(err, {
                        userExists: true
                    });
                }
            }
        })
    },
    getUserByEmail: function(email, callback){
        console.log(`getting user with email ${email}`);
        db.User.findOne({email:email}, function(err, user){
            console.log(err);
            console.log(user);
            callback(err, user);
        })
    },
    getUser: function(id, callback){
        console.log(`getting user with id ${id}`);
        db.User.findOne({_id:id}, function(err, user){
            callback(err, user);
        });
    },
    getAllUsers: function(callback){
        console.log(`getAllUsers()`);
        db.User.find({})
        .then(function(users){
            console.log('found users');
            callback(users)
        })
        .catch(function(err){
            console.log(err);
        });
    },
};

module.exports = orm;