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
      if (payload.date != ""){
        var date = Date.parse(payload.date);
        payload.date = date;
      }
      
      LabReservation.getLabReservationsByPayload(payload,function(err,labReservationRes){
        if (err){
          throw err;
        }
        res.json(labReservationRes);
      })

    },

    create: function(req, res) {
      var newLabReservation = req.body;
      var date = Date.parse(req.body.date);
      newLabReservation.date = date;
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