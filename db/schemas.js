const mongoose = require('mongoose');

const People = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            minlength: 2,
        }
    });


module.exports = {
    People: People
}
