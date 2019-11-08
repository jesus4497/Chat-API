const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) =>{
    
    const  id  = req.query.id || null
    
    controller.getMessages(id)
    .then( list => 
        response.success(req,res, list)
    )
    .catch(err => response.error(req ,res, 'No messages', 500, err.message))
})

router.post('/',(req,res)=>{

    controller.addMessage(req.body.user, req.body.message)
    .then( fullMessage => {
        response.success(req,res, fullMessage);
    })
    .catch(err => response.error(req,res, 'Bad information', 500, err.message))


})

router.patch('/:id', (req,res) =>{

    const { id } = req.params

    controller.updateMessage(id, req.body.message)
    .then( data => {
        response.success(req,res, data)
    })
    .catch(err => response.error(req,res, 'Bad information', 500, err.message))
    
})

router.delete('/', (req,res) =>{
    const { id } = req.query;

    controller.deleteMessage(id)
    .then( () =>{
        response.success(req,res, "Deleted successfully")
    })
    .catch(err=> response.error(req,res, "Internal error", 500, err.message))
})

module.exports = router;