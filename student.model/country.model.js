 const mongoose = require('mongoose')
 const Schema = mongoose.Schema


const countrySchema = new Schema({
 
    _id:{
        type:Number,
        
    },
    id:{
        type:Number
    },
    name:{
        type:String,
        
    },
    country_id:{
        type:Number,
        
    },
    iso3:{
        type:String,
    },
    iso2:{
         type:String,
    
    },
    numeric_code:{
        type:Number,
    },
    phone_code:{
        type:String,
        
    },
    capital:{
        type:String
    },
    currency:{
        type:String
    },
    currency_name:{
        type:String
    },
    currency_symbol:{
        type:String
    },
    tld:{
        type:String
    },
    native:{
        type:String
    },
    region:{
        type:String
    },
    subregion:{
        type:String
    },
    timezones:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    emoji:{
        type:String
    },
    emojiU:{
        type:String
    },
  
})


const Country = new mongoose.model('Country',countrySchema)
module.exports = Country