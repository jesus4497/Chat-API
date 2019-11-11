const db = require('../../lib/mongo');
const Model = require('./model');

function addUser(user){
    const newUser = new Model(user);
    return newUser.save();
}

async function getUser(id){
    if(id !== null){
        const user = await Model.findOne({ _id: id });
        if(!user){
            throw new Error('theres not such thing')
        }
        return user
    }
    return Model.find()
}


module.exports = {
    add: addUser,
    get: getUser,
    // update: updateUser,
    // delete: deleteUser,
}