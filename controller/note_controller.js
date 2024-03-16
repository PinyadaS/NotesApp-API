const { NoteModel } = require("../models/note");

class NoteController {
    async createNote(req,res) {
      try {
        const newNote = await NoteModel.createNote(req.body)
        return res.status(201).json({data:newNote})
      } catch (error) {
        return res.status(500).json({data:error.message})
      }
    }
    async listNote(req,res) {
      try {
        const userID = req.query.userID
        console.log(userID)
        const notelist = await NoteModel.listNote(userID)
        return res.status(200).json({data:notelist})
      } catch (error) {
        return res.status(500).json({data:error.message})
      }
    }
}

module.exports = new NoteController();