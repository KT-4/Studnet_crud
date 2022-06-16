const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentSchema =  new Schema({
    name:{type:String,required:true},
    roll:{type:String,required:true},
    
    subject:[{
        type:Schema.Types.ObjectId,
        ref:'Subject',
        required:true
    }],
    marks:[{
        type:Schema.Types.ObjectId,
        ref:'Marks',
        required:true
    }],

    // toJSON: { virtuals: true },
    // toObject: { virtuals: true },


    
})



module.exports = mongoose.model('Student',studentSchema)