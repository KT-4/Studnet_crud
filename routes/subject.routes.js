// const router = require('express').Router()
const express = require('express')
const router = express.Router()
const createNewSubject = require('../controllers/subjectController')

router.post('/subject',createNewSubject)

module.exports = router