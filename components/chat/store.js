const db = require('../../lib/mongo');
const Model = require('./model');

function addChat(chat){
    const myChat = new Model(chat);
    return myChat.save()
}

function getChat(id){
    return new Promise((resolve,reject) => {
        if(id !== null){
            Model.findOne({ _id: id })
            .populate('users')
            .exec((error, populated) => {
                if(error) reject('no such users')
                resolve(populated)
            })
        }
        Model.find()
        .populate('users')
        .exec((error, populated) => {
            if(error) reject('no such users')
            resolve(populated)
        })

    })
}





module.exports = {
    add: addChat,
    get: getChat,
}