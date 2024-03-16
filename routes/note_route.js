const express = require ('express');
const note_controller = require('../controller/note_controller');
const router = express.Router();

router.post('/create', (req,res) => {
    note_controller.createNote(req,res)
})

router.get('/notes', (req,res) => {
    note_controller.listNote(req,res)
})

module.exports = router;