require('./db/db');
const express=require('express')
const app=express();
const router=require('./routes/routes')
const bodyParser=require('body-parser');
const port =process.env.PORT || 8080;

app.set('view engine','ejs')
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/',router);

app.listen(port,(err)=>{
    console.log(`server is running on port ${port}`);
})