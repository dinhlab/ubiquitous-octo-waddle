const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const defaultMongoURI = 'mongodb://127.0.0.1:27017/coder_cars'
const mongoURI = process.env.MONGO_URI || defaultMongoURI

mongoose
  .connect(mongoURI)
  .then(() => console.log(`Connected to ${mongoURI}`))
  .catch((err) => console.log(err, 'ERROR'))

app.use('/', indexRouter)

module.exports = app
