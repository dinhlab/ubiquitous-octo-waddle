const express = require('express')
const { createCar, getCars, editCar, deleteCar } = require('../controllers/car.controller')
const router = express.Router()
router.post('/', createCar)
router.get('/', getCars)
router.put('/:id', editCar)
router.delete('/:id', deleteCar)
module.exports = router
