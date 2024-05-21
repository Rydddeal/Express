const express = require('express')
const router = express.Router();
const {login, verifyToken} = require('../controllers/authController')
// const {dashBoard, adminDashboard, userDashboard} = require('../controllers/dashboardContollers')
const { registerUser } = require('../controllers/userController');

// router.get('/', getUser)
router.post('/login', login);
router.post('/register', registerUser);

module.exports = router;