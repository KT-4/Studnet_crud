const multer = require('multer')
const path = require('path')

const diskStorage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'upload')   
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

 const storage = multer({storage:diskStorage}).array("file")
 module.exports = storage