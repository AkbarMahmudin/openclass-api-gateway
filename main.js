const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const materialsRouter = require('./routes/materials')
const modulesRouter = require('./routes/modules')
const classroomsRouter = require('./routes/classrooms')
const syllabusesRouter = require('./routes/syllabuses')
const myClassroomsRouter = require('./routes/my-classrooms')

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
// Service Classroom
app.use('/classrooms', classroomsRouter)
app.use('/syllabuses', syllabusesRouter)
app.use('/my-classrooms', myClassroomsRouter)

app.use((err, req, res, next) => {
  const { status = 'fail', message = 'internal server error' } = err.response?.data

  return res.json(err.response?.status || 500, {
    status,
    message
  })
})

module.exports = app
