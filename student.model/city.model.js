const mongoose = require('mongoose')
const Schema = mongoose.Schema


const citySchema = new Schema({

    id:{
        type:String
    },
    name:{
        type:String
    },
    state_id:{
        type:String
    },
    state_code:{
        type:String
    },
    state_name:{
        type:String
    },
    country_id:{
        type:String
    },
    country_code:{
        type:String

    },
    country_name:{
        type:String
    },
    latitude:{

    },
    longitude:{
        type:String
    },
    wikiDataId:{
        type:String      
    },

})


const City = mongoose.model('City',citySchema)
module.exports = City












