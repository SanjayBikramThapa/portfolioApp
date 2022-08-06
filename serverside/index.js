const express=require('express');
const cors=require('cors');
const authRoute= require('./routes/authRoute')
const contentRoute = require('./routes/contentRouter')
require('dotenv').config();
const db = require('./database/connection')
const bodyParser =  require('body-parser') 
const cookieParser = require('cookie-parser')

const app=express();

const port = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json())
app.use(cors())

app.use('/api',authRoute)
app.use('/api',contentRoute)
app.use(cookieParser())


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);

});
