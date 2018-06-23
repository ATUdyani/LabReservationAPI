var mongoose = require('mongoose');
var labSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    seats:{
        type:String
    }
});

var Lab = mongoose.model('Lab', labSchema);
 
module.exports = Lab;