
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'upload')   
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

 const upload = multer({storage:storage}).single("file")



router.post('/file',(req, res)=>{
    upload(req,res,(err)=>{

        if(err){
            console.log(err)
        }

        console.log(req.file)
        let data = req.file
        res.json({data})
    })
    
})


const uploads = multer({storage:storage})

router.post('/multifiles',uploads.array("files",9000),(req,res)=>{
    const files = req.files
    if(Array.isArray(files) && files.length > 0){
        res.json(files)
    }else{
        throw new Error
    }
})



module.exports = router