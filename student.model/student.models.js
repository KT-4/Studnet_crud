const mongoose = require('mongoose')


const studentSchema =  new mongoose.Schema({

    name:{
        type:String,
        required:true},
    roll:{
        type:String,
        required:true},
    subject:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required:true      
    }],
    marks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Marks',
        required:true
    }],
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    file:[{
        type:String
    }]
        
})
const Student = new mongoose.model('Student',studentSchema)
module.exports = Student