const express=require("express")
var router=express.Router();
var objectId=require('mongoose').Types.ObjectId;
var{ Employee}=require("../models/employee");

router.get("/list",(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log("connection failed...."+JSON.stringify(err,undefined,2))};
    })
});
router.get("/:id",(req,res)=>{
  if(!objectId.isValid(req.params.id))
  return res.status(4000).send("No record with given ID: $(req.parama.id)")

  Employee.findById(req.params.id,(err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log("connection failed...."+JSON.stringify(err,undefined,2))};
})
  });

router.post("/post",(req,res)=>{
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log("connection failed...."+JSON.stringify(err,undefined,2))}
    });
})

router.put("/:id",(req,res)=>{
    if(!objectId.isValid(req.params.id))
  return res.status(4000).send("No record with given ID: $(req.parama.id)")

  var emp1=new Employee({
    name:req.body.name,
    position:req.body.position,
    office:req.body.office,
    salary:req.body.salary
});
Employee.findByIdAndUpdate(req.params.id,{$set:emp1 },{new:true},(err,doc)=>{
    if(!err){res.send(docs);}
        else{console.log("connection failed...."+JSON.stringify(err,undefined,2))}
})
})

router.delete("/:id",(req,res)=>{
    if(!objectId.isValid(req.params.id))
  return res.status(4000).send("No record with given ID: $(req.parama.id)")

  Employee.findByIdAndDelete(req.params.id,{$set:emp1 },{new:true},(err,doc)=>{
    if(!err){res.send(docs);}
        else{console.log("connection failed...."+JSON.stringify(err,undefined,2))}
})
})

module.exports= router;