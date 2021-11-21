const mongoose=require('mongoose');
const url="mongodb+srv://waqas:waqas123@cluster0.qwpqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const db=mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log('error',err);
})

module.exports=db;