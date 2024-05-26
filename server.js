const express = require('express');
const dotenv = require('dotenv');

//Load Env File
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})