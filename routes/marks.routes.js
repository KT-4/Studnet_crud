// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const createNewMarks = require('../controllers/marksController')

router.post('/marks',createNewMarks)

module.exports = router