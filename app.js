const express=require('express');
const app=express();
const mongoose=require("mongoose");
const path = require('path');
const methodOverride=require("method-override");
const ejsMate =require('ejs-mate');
const ExpressError=require("./utils/ExpressError.js");
const session = require('express-session');
const flash = require('connect-flash');

const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js");

main()
.then(()=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended :true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")))

const sessionOptions={
    secret:"mysupersecret", resave:false, saveUninitialized:true,
    cookie:{
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
};

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all(/.*/, (req,res,next)=>{
    next(new ExpressError("Page Not Found",404));
});
app.use((err,req,res,next)=>{
    const { statusCode=500,message="Something went wrong" }=err;
    res.status(statusCode).render("error.ejs",{err});
    // res.status(statusCode).send(message);
    // res.send("Oh no, something went wrong!!");
});

app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000/listings`);
});