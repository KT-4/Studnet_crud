const express = require('express')
const router = express.Router()
const {createNewStudent,getStudent} = require('../controllers/studentController')


router.post('/student',createNewStudent)
router.get('/student',getStudent)

module.exports = router