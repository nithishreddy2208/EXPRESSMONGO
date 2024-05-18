const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/db_name")

const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.PORT;

const sroutes=require('./routes/student.route')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/students',sroutes)




app.listen(port,()=>console.log(`Server started at port number ${port}`))