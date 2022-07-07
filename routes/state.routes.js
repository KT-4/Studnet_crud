const express = require('express')
const router = express.Router()

const {getState,getSingleState} = require('../controllers/countryController')

router.get('/state',getState)


module.exports = router



