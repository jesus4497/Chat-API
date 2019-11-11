const db = require('../../lib/mongo');
const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessages(id){

    return new Promise((resolve, reject) => {
        if(id !== null){
            Model.findOne({ _id: id })
            .populate('user')
            .exec((error, populated) => {
                if(error) reject(error)
                resolve(populated)
            })
            
        }
        
        Model.find()
        .populate('user')
        .exec((error, populated) => {
            if(error) reject('no chats')
            resolve(populated)
        })
    })
    
    
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