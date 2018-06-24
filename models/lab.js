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

var Lab = module.exports = mongoose.model('Lab', labSchema);

//Get Labs
module.exports.getLabs = function(callback, limit){
	Lab.find(callback).limit(limit);
}

//Get Lab 
module.exports.getLabById = function(_id, callback){
	Lab.findById(_id, callback);
}

//Add Lab
module.exports.addLab = function(lab, callback){
	Lab.create(lab, callback);
}

//Update Lab
module.exports.updateLab = function(id, lab, options, callback){
	query = {_id: id};
	update = {
		name : lab.name,
		location: lab.location,
		description: lab.description,
		seats: lab.seats
	}
	Lab.findOneAndUpdate(query, update, options, callback);
}

//Delete Lab
module.exports.removeLab = function(id, callback){
	query = {_id: id};
	Lab.remove(query, callback);
}