const express = require("express")
const app = express()
const port = 5000
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://yaroslav:147258@cluster0.eekrg.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection
db.once('open', ()=> console.log('connected to DB!'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

