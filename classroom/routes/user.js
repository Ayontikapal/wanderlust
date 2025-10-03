const express=require('express');
const router=express.Router();

//index-users
router.get("/",(req,res)=>{
    res.send("users route is working");
});

//show-user
router.get("/:id",(req,res)=>{
    res.send("show user route is working");
});

//create-user
router.post("/",(req,res)=>{
    res.send("create user route is working");
});
//update-user
router.put("/:id",(req,res)=>{
    res.send("update user route is working");
});
//delete-user
router.delete("/:id",(req,res)=>{
    res.send("delete user route is working");
});

module.exports=router;