const express = require('express')
const contacts = require('../models/contacts')
const router = express.Router()
const Contact = require('../models/contacts')

router.get('/', async (req, res)=>{
    try{
        const contacts = await Contact.find()
        res.json(contacts)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const contacts = new Contacts({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
       const data = await contacts.save()
       res.json(data)
    }catch(err){
        res.send(err)
    }
})

module.exports = router