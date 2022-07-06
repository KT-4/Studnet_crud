const mongoose = require('mongoose')
const Schema = mongoose.Schema




const stateSchema = new Schema({
    _id:{
        type:Number
    },
    id:{
        type:Number
    },
    name:{
        type:String
    },
   
    country_code:{
      type:String
    },
    country_name:{
        type:String
    },
    state_code:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
  

})

const State = mongoose.model('State',stateSchema)
module.exports = State
  