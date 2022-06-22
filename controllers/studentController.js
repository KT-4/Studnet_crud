const Subject = require('../student.model/subject.model')
const Student = require('../student.model/student.models')

const createNewStudent = async (req,res) =>{
    try{
        // const subject = await Subject.find({'name':{$in:[req.body.subject]}})
        // console.log("New subjet"+ subject)
        
           
        const student = new Student.aggrigate([
        
           
            {$match:{subject:{$eq:[req.params.id]}}},
             
        {
            name: req.body.name,     
            roll: req.body.roll,
            subject:req.body.subject,
            marks:req.body.marks
        }]);
        await student.save();
        res.status(200).send(student)
    }
    catch(err){
        res.status(500).send(err)
    }
}


 const getStudent = async(req,res, next) =>{
     try{
         const student = await Student.find({}).populate("subject").populate("marks")
         

         res.status(200).send(student)
        
     }catch(err){
        res.status(500).send(err)
     }
  }

  const getIDStudent = async(req, res, next) =>{
      const _id= req.params.id
    try{
        const student = await Student.findById({_id}).populate({path:"subject",}).populate("marks")                 
        
        res.status(200).send(student)
       
    }catch(err){
       res.status(500).send(err)
    }
 }


 const UpdateStudent = async(req, res, next) =>{
    const _id= req.params.id
  try{
      const student = await Student.findByIdAndUpdate({_id},req.body,{new:true})
      res.status(200).send(student)  
  }catch(err){
     res.status(500).send()
  }
}


const deleteStudent = async(req, res, next) =>{
    const _id= req.params.id
  try{
      const student = await Student.findByIdAndDelete({_id})

      res.status(200).send(student)
     
  }catch(err){
     res.status(500).send(err)
  }
}


  module.exports = {createNewStudent,getStudent,getIDStudent,UpdateStudent,deleteStudent}