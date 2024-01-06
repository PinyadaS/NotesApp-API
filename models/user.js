const {DataTypes, QueryInterface} = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },{timestamps: false});

class UserModel {
  async createUser(newUser) {
    const user = await User.create(newUser)
    return user
  }
};

module.exports = {User, UserModel: new UserModel()};