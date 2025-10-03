const express=require('express');
const app=express();
const path=require('path');
const users =require("./routes/user.js");
const posts =require("./routes/post.js");
const session = require('express-session');
const flash = require('connect-flash');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions={
secret:"mysupersecret", resave:false, saveUninitialized:true
};
app.use(session(sessionOptions));
app.use(flash());

app.get("/register" ,(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name=="anonymous"){
        req.flash("error", "user not registered");
    }else{
        req.flash("success", "user registered successfully");
    }
    res.redirect("/hello");
});

app.get("/hello", (req,res)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.render("page.ejs",{name:req.session.name});
});
// app.get("/reqcount",(req,res)=>{
//     if(!req.session.count){
//         req.session.count=0;
//     }
//     req.session.count++;
//     res.send(`You have visited this site ${req.session.count} times`);
// });

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000`);
});