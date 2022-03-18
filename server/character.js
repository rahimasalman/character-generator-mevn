const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    profession: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Character', characterSchema);