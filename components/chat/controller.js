const store = require('./store');

const addChat = users => {
    return new Promise((resolve, reject) => {
        if(!users || !Array.isArray(users)) reject('No chat or user');
        const chat = {
            users
        }

        resolve(store.add(chat))
    })
}

const getChat = id => {
    return new Promise((resolve, reject) =>{
        if(store.get().length === 0){
            reject('No chats')
        }
        
        resolve(store.get(id))
    })
    
}

module.exports = {
    addChat,
    getChat
}