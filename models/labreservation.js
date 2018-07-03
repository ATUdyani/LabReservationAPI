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
    startDate:{
        type:Number,
        require:true
    },
    endDate:{
        type:Number,
        require:true
    },
    note:{
        type:String
    },
    status:{
        type:String
    }
});

labReservationSchema.pre('save', function (next) {
    var user = this;
    if (user) {
        LabReservation.validateLabReservation(user, function(err, res){
            if (err){
                return next(err);
              }
              if(res>0) {
                return next(new Error("not available"))
              } else {
                return next();
              }
        });
    } else {
        return next();
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
    if (payload.labId != "") {
        criteria.push({ labId:payload.labId });
    }
    if (payload.startDate != null) {
       criteria.push({ startDate:{$lte:payload.startDate},endDate:{$gte:payload.startDate} });
    }
    criteriaQuery = criteria.length > 0 ? { $and: criteria } : {};
    LabReservation.find(criteriaQuery).populate('labId').populate('userId').exec(callback);
}

//Add LabReservation
module.exports.addLabReservation = function(labReservation, callback){
	LabReservation.create(labReservation, callback);
}

//Update labReservation
module.exports.updateLabReservation = function(labReservation, callback){
	query = {_id: labReservation.id};
	LabReservation.findOneAndUpdate(query, labReservation, callback);
}

//Delete labReservation
module.exports.removeLabReservation = function(id, callback){
	query = {_id: id};
	LabReservation.deleteOne(query, callback);
}

module.exports.validateLabReservation = function(queryData, callback){
    var query1 = {startDate:{$lte:queryData.startDate},endDate:{$gte:queryData.endDate}};
    var query2 = {startDate:{$gte:queryData.startDate,$lte:queryData.endDate}}
    var query3 = {endDate:{$gte:queryData.startDate,$lte:queryData.endDate}}
    console.log(query1);
    LabReservation.count({$or:[query1,query2, query3],labId:queryData.labId},callback);
}