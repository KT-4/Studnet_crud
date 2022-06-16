
require('dotenv').config()
const express =require('express');
const app = express();
require('./serverConnection/connection')
const port = process.env.PORT || 3000
const sutdentRoute = require('./routes/student.routes')
const marksRoute = require('./routes/marks.routes')
const subjectRoute = require('./routes/subject.routes')


//listen router in app
app.use(express.json());

app.use('/',sutdentRoute)
app.use('/',marksRoute)
app.use('/',subjectRoute)



app.listen(port,()=> console.log(`server is running ${port}`))