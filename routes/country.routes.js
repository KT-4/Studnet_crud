 const express = require('express')
 const router = express.Router()

const {getCountry,getSingleCountry} = require('../controllers/countryController')

 router.get('/country',getCountry)
 router.get('/country/:id',getSingleCountry)



 module.exports = router