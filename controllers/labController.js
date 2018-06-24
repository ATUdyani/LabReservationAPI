var Lab  = require('../models/lab.js');

var lab = {
 
    getAll: function(req, res) {
        Lab.getLabs(function(err,labRes){
        if (err){
          throw err ;
        }
        res.json(labRes);
      })
    },
   
    getOne: function(req, res) {
      var id = req.params.id;
      Lab.getLabById(id, function(err,labRes){
        if (err){
          throw err ;
        }
        res.json(labRes);
      })
    },
   
    create: function(req, res) {
      var newLab = req.body;
      Lab.addLab(newLab, function(err,labRes){
        if (err){
          throw err ;
        }
        res.json(labRes);
      })
    }
}

module.exports = lab;