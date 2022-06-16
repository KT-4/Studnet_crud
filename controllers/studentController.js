
const Student = require('../student.model/student.models')

createNewStudent = async (req,res) =>{
    try{
        const student = new Student({
            name: req.body.name,
            roll: req.body.roll,
            subject:req.body.subject,
            marks:req.body.marks
        });
        await student.save();
        res.status(200).send(student)
    }
    catch(err){
        res.status(500).send()
    }
}


  getStudent = async(req,res) =>{
     try{
         const student = await Student.find().populate('Subject').populate('Marks')
         res.status(200).send(student)
         res.status(200).send(student)
     }catch(err){
        res.status(500).send()
     }
  }

  


  module.exports = {createNewStudent,getStudent}