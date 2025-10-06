const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

//create new review
module.exports.create=async(req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    const newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Created new review!");
    res.redirect(`/listings/${id}`);
};

//delete review
module.exports.destroy=async(req,res)=>{
    const {id, reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};