var express = require('express');
var router = express.Router();

var labReservation  = require('./labReservationController.js');
var lab  = require('./labController.js');
var user  = require('./userController.js');
var auth = require('./auth.js');

router.post('/login', auth.login);
router.post('/signup', user.register);

router.get('/api/labs', lab.getAll);
router.get('/api/lab/:id', lab.getOne);
router.post('/api/lab', lab.create);

router.get('/api/labReservations', labReservation.getAll);
router.get('/api/labReservation/:id', labReservation.getOne);
router.post('/api/labReservation', labReservation.create);

module.exports = router;