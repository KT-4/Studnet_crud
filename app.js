const cors = require('cors')
require('dotenv').config()
const express =require('express');
const app = express();
require('./serverConnection/connection')
const port = process.env.PORT || 3000
const sutdentRoute = require('./routes/student.routes')
const marksRoute = require('./routes/marks.routes')
const subjectRoute = require('./routes/subject.routes')
const countryRoute = require('./routes/country.routes')
const stateRoute = require('./routes/state.routes')
const cityRoute = require('./routes/city.routes')
 const uploadRoute = require('./routes/upload.routes')
//listen router in app

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/files',express.static('upload'))

app.use('/',sutdentRoute)
app.use('/',marksRoute)
app.use('/',subjectRoute)
app.use('/',countryRoute)
app.use('/',stateRoute)
app.use('/',cityRoute)
 app.use('/',uploadRoute)

app.listen(port,()=> console.log(`server is running ${port}`))