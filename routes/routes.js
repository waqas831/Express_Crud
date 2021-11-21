const express=require('express');
const router=express.Router();
const student=require('../models/Student')

router.get('/',async(req,res)=>{
    const data=await student.find({});
    res.render('student',{data:data})
})

router.post('/',async(req,res)=>{
    const data=await {
        name:req.body.name,
        roll:req.body.roll,
        fees:req.body.fees,
        department:req.body.department
    }
    const student_data=await new student(data);
    student_data.save().then(()=>{
        console.log('data saved');
        res.redirect('/')
        //res.redirect('/student')
    }).catch((err)=>{
        console.log('error',err);
    })
})

router.post('/delete/:id',async(req,res)=>{
    console.log(req.params.id);
    const id= await req.params.id;
    const deletedata= await student.findByIdAndDelete(id);
    if(deletedata){
        res.redirect('/')
    }
    else{
        console.log('error');
    }

    // const data=await student.findByIdAndDelete(req.params.id);
    // res.json({msg:'data deleted',data:data})
});


router.get('/edit/:id',async(req,res)=>{
    const id=req.params.id;
    const data=await student.findById(id);
    if(data){
        res.render('edit',{data:data})
    }
    else{
        console.log('error occured')
    }
})

router.post('/update/:id',async(req,res)=>{
    const id=req.params.id;
    const data=await student.findByIdAndUpdate(id,{
        name:req.body.name,
        roll:req.body.roll,
        fees:req.body.fees,
        department:req.body.department
    })
    const dave=await data.save();
    if(dave){
        res.redirect('/')
    }
    else{
        console.log('error occured')
    }
})
module.exports=router;