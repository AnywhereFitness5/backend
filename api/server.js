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
  res.json(`Welcome to the Anywhere Fitness5 Lambda server! 🚴‍♀️`)
})
server.get('/api', (req, res) => {
  res.json(`The Anywhere Fitness api! 🚴‍♀🏃‍♂️ Try accessing /users or /classes`)
})


module.exports = server
