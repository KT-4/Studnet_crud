const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subjectSchema = new Schema({
    subject:{
        type:String,
        required:true,
        unique:true
    }
   
    

        // name:{type:String,required:true},
        // roll:{type:String,required:true},
        // subject:[{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:'Subject',
        //     required:true      
        // }]

})

const Subject = new mongoose.model('Subject',subjectSchema)
module.exports = Subject