const store = require('./store');

const addMessage = (user, message) =>{

    return new Promise((resolve,reject) =>{
        if(!user || !message){
            console.error('[message controller] no user or message')
            return reject('Bad entries')
        }
        const fullMessage = {
            user,
            message,
            date: new Date(),
        }

        store.add(fullMessage)
        
        resolve(fullMessage)

    });
    
    
}

const getMessages = id =>{

    return new Promise((resolve, reject) =>{
        if(store.get().length === 0) {
            return reject('Theres no messages in the array')
        }
        resolve(store.get(id));
    })
}

const updateMessage =  (id, message) => {
    return new Promise( async (resolve, reject) =>{

        if(!id || !message) return reject('No id or message')
        
       const res = await store.update(id, message);
       resolve(res);
        
    })
}

const deleteMessage = id => {
    return new Promise ((resolve,reject) => {
        if(!id) reject('Theres no such id')
        resolve(store.delete(id))
    })
}

module.exports = {addMessage, getMessages, updateMessage, deleteMessage};