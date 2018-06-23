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
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    note:{
        type:String
    },
    status:{
        type:String
    }
});

var LabReservation = mongoose.model('LabReservation', labReservationSchema);
 
module.exports = LabReservation;