const Marks = require('../student.model/marks.model')


createNewMarks = async (req,res) =>{
    try{
        const marks  = new Marks(req.body)
         await marks.save();
        res.status(200).send(marks)
      }
     catch(err){
        res.status(500).send()
       }
}

module.exports = createNewMarks