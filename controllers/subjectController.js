const Subject = require('../student.model/subject.model')


createNewSubject = async (req,res) =>{
 try{
    const subject = new Subject ({
        subject:req.body.subject,
        
     })
     await subject.save();

     const student = new Student.findById({_id})
     student.Subject.push(subject)

        res.status(200).send(subject)
  }
 catch(err){
    res.status(500).send()
   }
}



module.exports = createNewSubject