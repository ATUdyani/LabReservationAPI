var express = require('express');
var router = express.Router();

var labReservation  = require('./labReservationController.js');
var lab  = require('./labController.js');
var user  = require('./userController.js');
var auth = require('./auth.js');

router.post('/login', auth.login);
router.post('/signup', user.register);

module.exports = router;