 const mongoose = require('mongoose')
 const Schema = mongoose.Schema


const countrySchema = new Schema({
 
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


const Country = new mongoose.model('Country',countrySchema)
module.exports = Country