const express = require ('express');
const UserController = require('../controller/user_controller');
const router = express.Router();

router.post('/register', async(req,res) => {
    console.log(req.body)
    await UserController.registerUser(req,res)
});

module.exports = router;