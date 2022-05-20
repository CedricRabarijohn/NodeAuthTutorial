const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json({extended:false}))

//db
const connectDB = require('./db/connection')
connectDB()
//Routers
const router1 = require('./routers/router1')
app.use('/router1', router1)

//Launching the app
const port = process.env.PORT | 3000 
app.listen(port, async() => {
    console.log(`listening on port ${port}`)
    // console.log(process.env.DB_STRING)
})