const express = require('express')
const router = express.Router()
const {createNewStudent,getStudent, getIDStudent,UpdateStudent,deleteStudent} = require('../controllers/studentController')


router.post('/student',createNewStudent)
router.get('/student',getStudent)
router.get('/student/:id',getIDStudent)
router.patch('/student/:id',UpdateStudent)
router.delete('/student/:id',deleteStudent)
module.exports = router