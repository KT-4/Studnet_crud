const mongoose = require('mongoose')


const studentSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    roll:{type:String,required:true},
    mobile:{type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
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
    }
        
})
const Student = new mongoose.model('Student',studentSchema)
module.exports = Student