var express = require('express');
var router = express.Router();

var labReservation  = require('./labReservationController.js');
var lab  = require('./labController.js');
var user  = require('./userController.js');
var auth = require('./auth.js');

router.post('/api/login', auth.login);
router.post('/api/signup', user.register);

router.post('/api/user', auth.getUser);
router.post('/api/user/validate', auth.authenticate);


router.get('/api/labs', lab.getAll);
router.get('/api/lab/:id', lab.getOne);
router.post('/api/lab', lab.create);

router.get('/api/labreservations', labReservation.getAll);
router.get('/api/labreservation/:id', labReservation.getOne);
router.post('/api/labreservation/search',labReservation.search);
router.post('/api/labreservation', labReservation.create);
router.post('/api/validatereservation', labReservation.validate);
router.put('/api/labreservation', labReservation.update);
router.delete('/api/labreservation/:id', labReservation.delete);

module.exports = router;