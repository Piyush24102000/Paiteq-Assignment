const express = require('express')
const userRoutes = express.Router()
const { getUser, createUser } = require('../controllers/userController')

/* User Routes */
userRoutes.get('/getUser', getUser)
userRoutes.post('/createUser', createUser)

module.exports = userRoutes