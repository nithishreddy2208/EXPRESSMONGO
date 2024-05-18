const studentModel=require('../model/student.model')


async function getStudent(req,res)
{
    const {id}=req.params
    const students=await studentModel.find()
    res.status(200).json(students)
}


async function getStudentById(req,res)
{
    const {id}=req.params
    const student=await studentModel.findById(id)
    if(!student)
        {
            res.status(404).json({Message:"Data not found"})
        }
    else
    res.status(200).json(student)
}


async function postStudent(req,res)
{
    try
    {
   const {id,name,age,email} =req.body;
   const student=await studentModel.create({
    _id:id,
    name,
    age,
    email
   })
   res.status(200).json(student);
}
catch(err)
{
    res.status(404).send(err)
}
}


async function updateStudent(req,res)
{
    const {id}=req.params
    const student=await studentModel.findByIdAndUpdate(id,req.body)
    if(!student)
        {
            res.status(404).json({Message:"Data not found"})
        }
    else
    res.status(200).json(student)
}


async function deleteStudent(req,res){
    const {id}=req.params
    const student=await studentModel.findByIdAndDelete(id)
    if(!student)
        {
            res.status(404).json({Message:"Data not found"})
        }
    else
    res.status(200).json(student)
}


module.exports={getStudent,getStudentById,postStudent,updateStudent,deleteStudent};