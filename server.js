require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()

/* Middlwares */
app.use(express.json())

/* Routes */
app.use('/api/user',userRoutes)

/* Connection */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => { console.log("Database and Server Connected on Port 5000") })
    })
    .catch((e) => { console.log(e) })