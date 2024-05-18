const express=require('express')

const routes=express.Router();

const studentModel=require('../model/student.model');
const { getStudent,getStudentById ,postStudent,updateStudent,deleteStudent} = require('../controller/student.controller');

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

routes.get('/',getStudent)

routes.get('/:id',getStudentById)

routes.post('/',postStudent)

routes.put('/:id',updateStudent)

routes.delete('/:id',deleteStudent)



module.exports=routes;