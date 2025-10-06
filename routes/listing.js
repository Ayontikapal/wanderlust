const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing} = require('../middleware.js');
const listingController=require("../controllers/listings.js");

router.route("/")
      .get(wrapAsync(listingController.index)) //index
      .post(isLoggedIn, validateListing, wrapAsync(listingController.create)); //create


//new route
router.get("/new", isLoggedIn, listingController.new);

router.route("/:id")
      .get(wrapAsync(listingController.show)) //show route
      .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.update)) //update 
      .delete(isLoggedIn, isOwner, wrapAsync(listingController.delete)); //delete

//edit route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.edit));

module.exports=router;