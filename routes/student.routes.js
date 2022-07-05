const express = require('express')
const router = express.Router()
  const {createNewStudent,getStudent, getIDStudent,getIdSubject,UpdateStudent,deleteStudent} = require('../controllers/studentController')


router.post('/student',createNewStudent)
router.get('/student',getStudent)
router.get('/student/:id',getIDStudent)
router.get('/student/:id/:id',getIdSubject)
router.patch('/student/:id',UpdateStudent)
router.delete('/student/:id',deleteStudent)

//countries get



module.exports = router