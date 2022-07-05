const Country = require ("../student.model/country.model")


const getCountry = async (req,res,next) =>{
        try{
             const countries = await Country.aggregate([
                  
               

                 { "$group": {
                            "_id": {
                             "country": "$country",
                              "state": "$state"
                            },
                            "city": {
                               "$addToSet": {
                                  "city": "$city"
                               }
                            }
                        }},
                         { "$group": {
                            "_id": "$_id.country",
                            "states": {
                              "$addToSet": {
                                 "state": "$_id.state",
                                 "city": "$city"
                              }
                           }
                    }}
             ])
            //  const countries = await Country.find({})
             res.status(200).send(countries)
         
        }catch(e){
            res.status(500).send(e)
        }
}

module.exports = {getCountry}