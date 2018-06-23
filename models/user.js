var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
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

var User = mongoose.model('User', userSchema);
 
module.exports = User;