const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema({
    subject:{
        type:String,
        required:true,
        unique:true
    },
    // marks:{
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'Marks',
    //         required:true
    //     },
    

})

const Subject = new mongoose.model('Subject',subjectSchema)
module.exports = Subject