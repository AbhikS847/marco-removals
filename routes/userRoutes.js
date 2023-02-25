const express = require('express');
const router = express.Router();

const {signUpUser, loginUser} = require('../controllers/userController');

router.post('/', signUpUser);

router.post('/login', loginUser);

module.exports = router;