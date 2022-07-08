// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const {createNewMarks,getMark,updateMark,deleteMark} = require('../controllers/marksController')

router.post('/marks',createNewMarks)
router.get('/marks',getMark)



module.exports = router