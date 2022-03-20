const express = require('express');
const router = express.Router();
const Character = require('./Character');

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;