const {DataTypes, QueryInterface} = require('sequelize');
const sequelize = require('../database/connection');
const { User } = require('./user');


const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    createby: DataTypes.STRING,
    text: DataTypes.STRING,
    lastopened: DataTypes.DATE,
  },{timestamps: false});

// User.hasMany(Note,{foreignKey: "createby"});
// Note.belongsTo(User,{foreignKey: "createby",targetKey: "id"});

class NoteModel {
    //create note logic
    async createNote(newNote,) {
        const note = await Note.create(newNote)
        return note
    };
    
    async listNote(userID) {
        const notelist = await Note.findAll({where:{createby: userID}})
        return notelist
    }
};

module.exports = {Note, NoteModel: new NoteModel()};