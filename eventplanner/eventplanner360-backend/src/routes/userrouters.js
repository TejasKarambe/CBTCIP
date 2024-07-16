const express = require('express');
const { registeruser, loginuser } = require('../controllers/usercontroller');

const router = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/register', registeruser);

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', loginuser);

module.exports = router;
