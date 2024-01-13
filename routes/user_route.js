const express = require ('express');
const UserController = require('../controller/user_controller');
const router = express.Router();

router.post('/register', (req,res) => {
    UserController.registerUser(req,res)
});

router.post('/login', (req,res) => {
    UserController.loginUser(req,res)
})

module.exports = router;