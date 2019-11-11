const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req,res)=>{
    controller.addUser(req.body.name)
    .then( user =>{
        response.success(req,res, `${user} created`)
    })
    .catch(err =>{
        response.error(req,res, 'Internal error', 500, err)
    })
})

router.get('/', (req,res)=>{
    const id = req.query.id || null
    controller.getUser(id)
    .then( user =>{
        response.success(req,res,user)
    })
    .catch(err =>{
        response.error(req,res,'Internal error', 500 ,err)
    })
})

module.exports = router;