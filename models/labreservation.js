var mongoose = require('mongoose');

var labReservationSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    labId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab'
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    date:{
        type:Date,
        require:true
    },
    note:{
        type:String
    },
    status:{
        type:String
    }
});

var LabReservation = module.exports = mongoose.model('LabReservation', labReservationSchema);
 
//Get labReservations
module.exports.getLabReservations = function(callback){
	LabReservation.find({}).populate('labId').populate('userId').exec(callback);
}

//Get labReservation
module.exports.getLabReservationById = function(_id, callback){
	LabReservation.findById(_id, callback);
}

//Get labReservationByPayload
module.exports.getLabReservationsByPayload = function(payload,callback){
    let criteria = [];
    if (payload.labId && payload.labId.length > 0) {
        criteria.push({ labId:payload.labId });
    }
    if (payload.date && payload.date.length > 0) {
       criteria.push({ date:payload.date });
    }
    criteriaQuery = criteria.length > 0 ? { $and: criteria } : {};
    LabReservation.find(criteriaQuery,callback);
    
}

//Add LabReservation
module.exports.addLabReservation = function(labReservation, callback){
	LabReservation.create(labReservation, callback);
}

//Update labReservation
module.exports.updateLabReservation = function(id, labReservation, options, callback){
	query = {_id: id};
	update = {
        userId: labReservation.userId,
        labId: labReservation.labId,
		title : labReservation.title,
		description: labReservation.description,
		date: labReservation.date,
		note: labReservation.note,
		status: labReservation.status
	}
	LabReservation.findOneAndUpdate(query, update, options, callback);
}

//Delete labReservation
module.exports.removeLabReservation = function(id, callback){
	query = {_id: id};
	LabReservation.remove(query, callback);
}