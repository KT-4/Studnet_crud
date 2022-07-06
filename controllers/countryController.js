
const Country = require ('../student.model/country.model')
const State = require ('../student.model/state.model')
const City = require ('../student.model/city.model')

const getCountry = async (req,res) =>{
        try{
        
                const countries = await Country.find({})      
                res.status(200).send(countries)
            
        }catch(e){
            res.status(500).send(e)
        }
}


const getState = async (req,res)=>{
        try{
           const state = await State.find()
        }catch(e){
                res.status(500).send(e)
        }
}



const getCity = async (req,res)=>{
        try{
           const state = await City.find()
        }catch(e){
                res.status(500).send(e)
        }
}



module.exports = {getCountry,getState,getCity}
