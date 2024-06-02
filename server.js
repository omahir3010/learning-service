const express = require('express');
const dotenv = require('dotenv');

//Load Env File
dotenv.config({path: './config/config.env'});

//Load Bootcamp Routers
const bootcamp = require('./routers/bootcamp');          

const app = express();

 //loading middleware
const bootcampMiddleware = require('./middleware/logger');
app.use(bootcampMiddleware)

app.use('/api/v1/bootcamps',bootcamp)


//Running App on specific PORT.
const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})