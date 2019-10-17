const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    date: Date,
    body: {
        type: String,
        require: true
    }
});

module.exports= mongoose.model('Message', MessageSchema);