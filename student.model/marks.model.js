const mongoose =require('mongoose')
const Schema = mongoose.Schema

const marksSchema = new Schema({
    marks:Number
})


const Marks = mongoose.model('Marks',marksSchema)

module.exports = Marks