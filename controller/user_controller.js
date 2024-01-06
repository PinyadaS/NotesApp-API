const { response } = require("express")
const { UserModel } = require("../models/user")

class UserController {
    async registerUser(req,res) {
        try {
            const user = req.body
            //const newUser = await UserModel.createUser(user)
            return res.status(201).json({data:newUser})
        } catch (error) {
            return res.status(500).json({data:error.message})
        }
    }
}

module.exports = new UserController();