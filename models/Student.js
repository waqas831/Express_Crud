const mongoose=require('mongoose');

const StudentRecord=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    roll:{
        type:String,
        required:true
    },
    fees:{
        type:mongoose.Decimal128,
        required:true,
        min:20000
    },
    department:{
        type:String,
        required:true,
    }
})

const Student_R=mongoose.model('record',StudentRecord);
module.exports=Student_R;