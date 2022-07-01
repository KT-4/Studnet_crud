const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema({
    subject:{
        type:String,
        required:true,
        unique:true
    }

})

const Subject = new mongoose.model('Subject',subjectSchema)
module.exports = Subject