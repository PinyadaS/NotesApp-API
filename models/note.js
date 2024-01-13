const {DataTypes, QueryInterface} = require('sequelize');
const sequelize = require('../database/connection');
const { User } = require('./user');


const Note = sequelize.define('Note', {
    notetype: DataTypes.ENUM("text","drawing"),
    title: DataTypes.STRING,
    createby: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    tagid: DataTypes.STRING
  },{timestamps: false});

User.hasMany(Note,{foreignKey: "createby"});
Note.belongsTo(User,{foreignKey: "createby",targetKey: "id"});

class NoteModel {
    //create note logic
    async createNote(newNote) {
        const note = await Note.create(newNote)
        return note
    };
};