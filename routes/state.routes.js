const express = require('express')
const router = express.Router()

const {getState} = require('../controllers/countryController')

router.get('/state',getState)


module.exports = router



