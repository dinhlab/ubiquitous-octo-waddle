const express = require('express')
const router = express.Router()
const carAPI = require('./car.api')
router.use('/car', carAPI)
module.exports = router
