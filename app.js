const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/nodeCRUD'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con= mongoose.connection

con.on('open', () => {
    console.log('connected..')
})

app.use(express.json())

const dataRouter = require('./routes/contact')
app.use('/contact', dataRouter)
app.listen(9000, () => {
    console.log('server started')
})