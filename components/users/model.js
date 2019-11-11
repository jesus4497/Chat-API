const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name: String, 
});

const Model = mongoose.model('Users', mySchema);

module.exports = Model