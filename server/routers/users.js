
const JWT = require('jsonwebtoken');
const user = require('../models/user');
var router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const UsersController = require('../controller/usercontroller');
router.route('/signup').post(UsersController.signUp);
router.route('/signin').post(passport.authenticate('local', { session: false }), UsersController.signIn);
router.route('/create').post(passport.authenticate('jwt', { session: false }), UsersController.createDoctors);
router.route('/get').get(passport.authenticate('jwt', { session: false }), UsersController.getDoctors);
router.route('/update').patch(passport.authenticate('jwt', { session: false }), UsersController.updateDoctors);


module.exports = router;