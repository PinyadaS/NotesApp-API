const { response } = require("express")
const { UserModel, User } = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

class UserController {
    //register logic
    async registerUser(req,res) {
        try {
            const user = req.body
            const newUser = await UserModel.createUser(user)
            newUser.password = undefined
            return res.status(201).json({data:newUser})
        } catch (error) {
            return res.status(500).json({data:error.message})
        }
    }

    //login logic
    async loginUser(req,res) {
        try {
            const {username,password} = req.body
            const user = await User.findOne({where: {username: username}})
            if (!user) {
                return res.status(404).json({data:"user not found"})
            }
            bcrypt.compare(password,user.password,(err,result) => {
                if (err) {
                    return res.status(400).json({data:"password incorrect"})
                }
                if (result) {
                    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "30d"})
                    return res.status(200).json({data:`Bearer ${token}`})
                }
            })
        } catch (error) {
            return res.status(500).json({data:error.message})
        }
    }
}

module.exports = new UserController();