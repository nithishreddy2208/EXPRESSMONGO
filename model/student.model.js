const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    _id:Number,
    name:String,
    age:Number,
    email:String
})
const studentModel=mongoose.model("student",studentSchema);

module.exports=studentModel;