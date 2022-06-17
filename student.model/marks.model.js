const mongoose =require('mongoose')
const Schema = mongoose.Schema

const marksSchema = new Schema({
    marks:{
        type:Number,
        required:true
    },
})


const Marks = new mongoose.model('Marks',marksSchema)

module.exports = Marks