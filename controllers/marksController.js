const Marks = require('../student.model/marks.model')


const createNewMarks = async (req,res) =>{
    try{
        const marks  = new Marks(req.body)
         await marks.save();
        res.status(200).send(marks)
      }
     catch(err){
        res.status(500).send()
       }
}

const getMark = async(req,res, next) =>{
  try{
      const marks = await Marks.find({})
     res.status(200).send(marks)
     
  }catch(err){
     res.status(500).send(err)
  }
}

const updateMark = async(req,res, next) =>{
  try{
      _id = req.params.id
      const marks = await Marks.findByIdAndUpdate({_id},req.body,{new:true})
     res.status(200).send(marks)
     
  }catch(err){
     res.status(500).send(err)
  }
}


const deleteMark = async(req,res, next) =>{
  try{
      _id = req.params.id
      const mark = await Subject.findByIdAndDelete({_id},req.body,{new:true})
     res.status(200).send(mark)
     
  }catch(err){
     res.status(500).send(err)
  }
}

module.exports = {createNewMarks,getMark,updateMark,deleteMark}