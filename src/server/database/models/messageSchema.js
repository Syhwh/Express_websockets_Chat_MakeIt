const mongoose = require('mongoose');

const MessageSchema = mongooseSchema({
    date: Date,
    message: {
        type: String,
        require: true
    }

});

module.exports= mongoose.model('Message', MessageSchema);