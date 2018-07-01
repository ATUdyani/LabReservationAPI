var LabReservation  = require('../models/labReservation.js');

var labReservation = {
 
    getAll: function(req, res) {
        LabReservation.getLabReservations(function(err,labReservationsRes){
        if (err){
          throw err ;
        }
        res.json(labReservationsRes);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      LabReservation.getLabReservationById(id, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      })
    },

    search: function(req,res){
      var payload = req.body;
      LabReservation.getLabReservationsByPayload(payload,function(err,labReservationRes){
        if (err){
          throw err;
        }
        res.json(labReservationRes);
      })

    },

    create: function(req, res) {
      var newLabReservation = req.body;
      var date = Date.parse(JSON.parse(req.body.date));
      LabReservation.addLabReservation(newLabReservation, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      })
    },

    remove: function(req,res){
      var id = req.params._id;
      LabReservation.removeLabReservation(id, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      })
    }        
}

module.exports = labReservation;