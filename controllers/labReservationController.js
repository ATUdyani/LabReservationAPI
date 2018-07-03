var LabReservation  = require('../models/labreservation.js');

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
      LabReservation.addLabReservation(newLabReservation, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      })
    },
    update: function(req, res) {
      var updateLabReservation = req.body;
      LabReservation.updateLabReservation(updateLabReservation, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      });
    },

    delete: function(req, res) {
      LabReservation.removeLabReservation(req.params.id, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      });
    },

    validate: function(req, res) {
      LabReservation.validateLabReservation(req.body, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      });
    }
}

module.exports = labReservation;