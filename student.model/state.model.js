const mongoose = require('mongoose')
const Schema = mongoose.Schema
const state = require('../js/state')



const stateSchema = new Schema({
    _id:{
        type:Number
    },
    name:{
        type:String
    },
    cities:[
        {
            type:Schema.Types.ObjectId,
            ref:'City'
        }
    ]
})

const State = mongoose.model('State',stateSchema)
module.exports = State
  