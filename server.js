const express=require('express');
require('dotenv').config({path:'./config/.env'})
require('./config/database')
const app=express();

// Middleware to receive data in json
app.use(express.json())

//Middleware for routes
app.use('/users',require('./routes/user'))



// listen to the port
app.listen(process.env.PORT, ()=>{
    console.log(`server listen to http://localhost:${process.env.PORT}`)
})