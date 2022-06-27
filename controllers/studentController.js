const Subject = require('../student.model/subject.model')
const Student = require('../student.model/student.models')
const Marks = require('../student.model/marks.model.js')

const createNewStudent = async (req,res) =>{
    try{
        
        const subject = await Subject.find({'subject': {$in:req.body.subject}})
        const subjectIds = subject.map(e=>e._id)

        const mark = await Marks.find({'mark':{$in:req.body.marks}})
       const markIds = mark.map(e=>e._id)
        
        if(!subjectIds){
            res.status(502).send({message:"Invilde Subjects"})
        }
        const student = new Student(
          {
             name: req.body.name,     
              roll: req.body.roll,
              subject:subjectIds,
              marks: markIds
              
         });
        await student.save();
        res.status(200).send(student)
    }
    catch(err){
        res.status(500).send(err)
    }
}


 const getStudent = async(req,res, next) =>{
     try{
         const student = await Student.find({})
         .populate('subject').populate('marks')
         

         res.status(200).send(student)
        
     }catch(err){
        res.status(500).send(err)
     }
  }

  const getIDStudent = async(req, res, next) =>{
      const _id= req.params.id
    try{
        const student = await Student.findById(_id).populate('subject').populate('marks')         
        
        res.status(200).send(student)
       
    }catch(err){
       res.status(500).send(err)
    }
 }

  const getIdSubject = async(req,res,next) =>{
    const _id = req.params.id
    const _subid = req.params.id
    try{
       const student = await Student.findById({_id},{_subid})
       res.status(200).send(student)
    }catch(err){
      res.status(500).send(err)
    }
  }


 const UpdateStudent = async(req, res, next) =>{
  try{
    const updatesub = await Subject.find({"subject":{$in:req.body.subject}})
    const updateMark = await Marks.find({"mark":{$in:req.body.marks}})
    
      const student = await Student.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        roll:req.body.roll,
        subject:updatesub,
        marks:updateMark
      },{new:true})

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


  module.exports = {createNewStudent,getStudent,getIDStudent,getIdSubject,UpdateStudent,deleteStudent}