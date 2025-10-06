const User=require("../models/user.js");

module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup=async(req,res)=>{
    try{
        const {username, email, password}=req.body;
        const newUser=new User({email, username});
        const registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser, err=>{
            if(err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    
};

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login=async(req,res)=>{
        req.flash("success", "Welcome back to Wanderlust!");
        res.redirect(res.locals.redirectUrl||"/listings");//redirect to listings if there is no saved url, due to direct log in that doesn't use the middleware
};

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};
