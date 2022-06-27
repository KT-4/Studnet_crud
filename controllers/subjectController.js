const Subject = require('../student.model/subject.model')


const createNewSubject = async (req,res) =>{
 try{
    const subject =  Subject({
        subject:req.body.subject,
     })
     subject.save();
      res.status(200).send(subject)
  }
 catch(err){
    res.status(500).send()
   }
}

const getSubject = async(req,res, next) =>{
   try{
       const subject = await Subject.find({})
      res.status(200).send(subject)
      
   }catch(err){
      res.status(500).send(err)
   }
}


const getSingleSubject = async(req,res, next) =>{
   
   try{
      _id=req.params.id
       const subject = await Subject.findById({_id})
      res.status(200).send(subject)
      
   }catch(err){
      res.status(500).send(err)
   }
}

const updateSubject = async(req,res, next) =>{
   try{
       _id = req.params.id
       const subject = await Subject.findByIdAndUpdate({_id},req.body,{new:true})
      res.status(200).send(subject)
      
   }catch(err){
      res.status(500).send(err)
   }
}


const deleteSubject = async(req,res, next) =>{
   try{
       _id = req.params.id
       const subject = await Subject.findByIdAndDelete({_id},req.body,{new:true})
      res.status(200).send(subject)
      
   }catch(err){
      res.status(500).send(err)
   }
}
module.exports = {createNewSubject,getSubject,getSingleSubject,updateSubject,deleteSubject}