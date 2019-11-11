const store = require('./store');

function addUser(name){
    return new Promise((resolve,reject) =>{
        if(!name) return reject('No name provided')
        const user = {
            name
        }
        resolve(store.add(user))
    })
}

function getUser(id){
    return new Promise( async (resolve,reject) =>{
        if(id === '') reject(' No id provided');
        
        try{
            const response = await store.get(id);
            resolve(response);
        }catch{
            return reject('No existing id')
        }
    })
}

module.exports = {
    addUser, 
    getUser, 
    // updateUser, 
    // deleteUser
}