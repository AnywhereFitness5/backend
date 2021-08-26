const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth_router')

// server.use('/api/classes', classesRouter)
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.json(`Welcome to the TT-33 Anywhere Fitness server! 🚴‍♀️`)
})
server.get('/api', (req, res) => {
  res.json(`The TT-33 Anywhere Fitness api! 🚴‍♀🏃‍♂️ Try accessing this endpoint /classes`)
})


module.exports = server
