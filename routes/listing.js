const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const { listingSchema }=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

//index route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//new route
router.get("/new", (req,res)=>{
    res.render("listings/new.ejs");
});

//show route
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

//create route
router.post("/", validateListing, wrapAsync(async(req,res)=>{
    const newListing =new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

//edit route
router.get("/:id/edit", wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update route with image handling
router.put("/:id",validateListing, wrapAsync(async (req, res) => {
  let { id } = req.params;
  let { listing } = req.body;
  let updateData = {...listing};
  // If user provided an image URL, add it
  if (listing.image) {
    updateData.image = {
      filename: "listingimage", // default filename
      url: listing.image        // url from form
    };
  }
  await Listing.findByIdAndUpdate(id, updateData, { runValidators: true });
  res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id", wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let deletedListing =await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

module.exports=router;