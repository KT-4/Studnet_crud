
require('dotenv').config()
const express =require('express');
const app = express();
require('./serverConnection/connection')
const port = process.env.PORT || 3000
const sutdentRoute = require('./routes/student.routes')
const marksRoute = require('./routes/marks.routes')
const subjectRoute = require('./routes/subject.routes')
const cors = require('cors')

//listen router in app
app.use(
    cors({
      origin: "http://localhost:4200",
    })
  );

app.use(express.json());
app.use('/',sutdentRoute)
app.use('/',marksRoute)
app.use('/',subjectRoute)


app.listen(port,()=> console.log(`server is running ${port}`))