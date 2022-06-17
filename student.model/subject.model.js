const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema({
    subject:String


})

const Subject = new mongoose.model('Subject',subjectSchema)
module.exports = Subject