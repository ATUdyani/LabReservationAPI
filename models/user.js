var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
		required: true
    },
    contactNumber:{
        type:String,
		required: true
    },
    email:{
        type:String,
		required: true
    },
    username:{
        type:String,
		required: true
    },
    password:{
        type:String,
		required: true
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                console.log('all hash done');
                next();
            });
        });
    } else {
        return next();
    }
});
 
userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        //give it to callback function of cb(in server.js)
        cb(null, isMatch);
    });
};

var User = module.exports = mongoose.model('User', userSchema);
 
//Get Users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

//Get User 
module.exports.getUserById = function(_id, callback){
	User.findById(_id, callback);
}

//Add User
module.exports.addUser = function(user, callback){
	User.create(user, callback);
}

//Update User
module.exports.updateUser = function(id, user, options, callback){
	query = {_id: id};
	update = {
		name : user.name,
		type: user.type,
		contactNumber: user.contactNumber,
		email: user.email,
		username: user.username,
		password: user.password
	}
	User.findOneAndUpdate(query, update, options, callback);
}

//Delete User
module.exports.removeUser = function(id, callback){
	query = {_id: id};
	User.remove(query, callback);
}