const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    message: {
        type: String,
        required: true
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats'
    },
    file: String,
    date: Date,
})

const Model = mongoose.model('Messages', mySchema);

module.exports = Model