const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.ObjectId,
        ref:'Users'
    }]
})

const Model = mongoose.model('Chats', mySchema)

module.exports = Model