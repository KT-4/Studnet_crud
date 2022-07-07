const express = require('express')
const router = express.Router()

const {getCity,getSingleCity} = require('../controllers/countryController')


router.get('/city',getCity)


module.exports = router