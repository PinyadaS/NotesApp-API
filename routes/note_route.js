const express = require ('express');
const note_controller = require('../controller/note_controller');
const router = express.Router();

router.post('/create', (req,res) => {
    note_controller.createNote(req.res)
})

module.exports = router;