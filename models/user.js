const {DataTypes, QueryInterface} = require('sequelize');
const sequelize = require('../database/connection');
const bcrypt = require("bcrypt")

const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },{timestamps: false});

class UserModel {
  async createUser(newUser) {
    const {password,...otherData} = newUser
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({password: hashedPassword,...otherData})
    return user
  }
};

module.exports = {User, UserModel: new UserModel()};