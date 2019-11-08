const db = require('../../lib/mongo');
const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessages(id){
    if(id !== null){
        const message = await Model.findOne({ _id: id });
        return message
    }
    
    const messages = await Model.find();
    return messages;
}

async function updateMessage(id, newMessage){
    const oldMessage = await Model.findOne({ _id: id });
    oldMessage.message = newMessage;
    const response = await oldMessage.save();
    return response
}

async function deleteMessage(id){
    const message = await Model.deleteOne({ _id: id });
    return message

}

module.exports = {
    add: addMessage,
    get: getMessages,
    update: updateMessage,
    delete: deleteMessage,
}