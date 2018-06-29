var LabReservation  = require('../models/labreservation.js');

var labReservation = {
 
    getAll: function(req, res) {
        LabReservation.getLabReservations(function(err,getLabReservationsRes){
        if (err){
          throw err ;
        }
        res.json(getLabReservationsRes);
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
      LabReservation.removeLabReservation(req.id, function(err,labReservationRes){
        if (err){
          throw err ;
        }
        res.json(labReservationRes);
      });
    }
}

module.exports = labReservation;