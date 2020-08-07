const mongoose=require("mongoose");
const express=require("express");
const bodyparser=require("body-parser");
var employeecontroller=require("./controllers/employeecontroler");

mongoose.connect("mongodb://127.0.0.1:27017/meanstackcurddemo", { useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
    if(!err){console.log("connection succeeded...")}
    else{console.log("connection failed...."+JSON.stringify(err,undefined,2))};

})


const app=express();
app.use(bodyparser.json());


app.use("/employee",employeecontroller);


app.listen(3000,(err)=>{
    if(!err) console.log("server is running");
    else console.log ("server is not running",err);
    
})