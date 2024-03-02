const { NoteModel } = require("../models/note");

class NoteController {
    async createNote(req,res) {
      try {
        newNote = await NoteModel.createNote(req.body)
        return res.status(201).json({data:newNote})
      } catch (error) {
        return res.status(500).json({data:error.message})
      }
    }
}

module.exports = new NoteController();