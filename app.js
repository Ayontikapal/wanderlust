const express=require('express');
const app=express();
const mongoose=require("mongoose");
const path = require('path');
const methodOverride=require("method-override");
const ejsMate =require('ejs-mate');
const ExpressError=require("./utils/ExpressError.js");
const session = require('express-session');
const flash = require('connect-flash');
const passport =require("passport");
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

const listingsRouter=require("./routes/listing.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");

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

app.use(session(sessionOptions));//to use session
app.use(flash());//to use flash

//passport configuration
app.use(passport.initialize()); //to initialize passport
app.use(passport.session()); //to use passport sessions
passport.use(new LocalStrategy(User.authenticate())); //to use local strategy to authenticate users
passport.serializeUser(User.serializeUser()); //to serialize users
passport.deserializeUser(User.deserializeUser()); //to deserialize users

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});

// app.get("/demoUser",async(req,res)=>{
//     const user=new User({email:"janedoe@gmail.com", username:"janedoe"});
//     const newUser=await User.register(user,"chicken");
//     res.send(newUser);
// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

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