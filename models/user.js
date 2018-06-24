var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    contactNumber:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
});

var User = module.exports = mongoose.model('User', userSchema);
 
//Get Users
module.exports.getUserks = function(callback, limit){
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