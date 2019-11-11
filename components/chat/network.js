const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
    controller.addChat( req.body.users )
    .then( chat => {
        response.success(req,res, chat)
    })
    .catch(err => {
        response.error(req,res, 'Bad Information', 500, err)
    })
})

router.get('/', (req,res) => {
    const id = req.query.id || null

    controller.getChat( id)
    .then( chat => {
        response.success(req,res,chat)
    })
    .catch(err => {
        esponse.error(req,res, 'Bad Information', 500, err)
    })

})


module.exports = router;