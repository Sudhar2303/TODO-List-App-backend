require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const router = require('./routes/router')
const cors = require('cors')

const PORT = process.env.PORT || 3500

const app = express()
app.get('/',(request,response)=>{
    response.status(200).send({message:'Server is running successfully'})
})

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(error)=> console.log(error))
db.once('open',() => console.log("Database connected successfully"))

app.use('/api/v1/list',router)

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})