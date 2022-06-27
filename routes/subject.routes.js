// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const {createNewSubject,getSubject,getSingleSubject,updateSubject,deleteSubject} = require('../controllers/subjectController')

router.post('/subject',createNewSubject)
router.get('/subject',getSubject)
router.get('/subject/:id',getSingleSubject)
router.patch('/subject/:id',updateSubject)
router.delete('/subject/:id',deleteSubject)


module.exports = router