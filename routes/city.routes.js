const express = require('express')
const router = express.Router()

const {getCity} = require('../controllers/countryController')


router.get('/city',getCity)


module.exports = router