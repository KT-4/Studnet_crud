const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connection successed')
}).catch((err)=>{
    console.log(`connection error ${err}`)
})


