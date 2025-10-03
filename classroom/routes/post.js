const express=require('express');
const router=express.Router();

//posts
//index-posts
router.get("/",(req,res)=>{
    res.send("post route is working");
});

//show-posts
router.get("/:id",(req,res)=>{
    res.send("show post route is working");
});

//create-posts
router.post("/",(req,res)=>{
    res.send("create post route is working");
});
//update-posts
router.put("/:id",(req,res)=>{
    res.send("update post route is working");
});
//delete-posts
router.delete("/:id",(req,res)=>{
    res.send("delete post route is working");
});

module.exports=router;
