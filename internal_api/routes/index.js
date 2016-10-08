var express = require('express');
var router = express.Router();
// var jwt = require('express-jwt');
// var auth = jwt({
// 	secret: process.env.JWT_SECRET,
// 	userProperty: 'payload'
// });

// var ctrlAuth = require('../controllers/authentication');

var zombieControl = require('../controllers/zombification');

// // authentication
// router.post('/register', ctrlAuth.register);
// router.post('/login', ctrlAuth.login);

// out of context (walkingdeadSn5)
router.get('/walkingdead', zombieControl.retrieveZombies);
router.post('/walkingdead', zombieControl.createZombies);
router.delete('/walkingdead/:zombieid', zombieControl.removeZombies);

module.exports = router;
