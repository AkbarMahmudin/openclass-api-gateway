const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const materialsRouter = require('./routes/materials')
const modulesRouter = require('./routes/modules')

const app = express()

require('dotenv').config()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
// Service User
app.use('/users', usersRouter)
// Service Post
app.use('/materials', materialsRouter)
app.use('/modules', modulesRouter)

app.use((err, req, res, next) => {
  const { status, message } = err.response?.data

  return res.json(err.response?.status, {
    status,
    message
  })
})

module.exports = app
