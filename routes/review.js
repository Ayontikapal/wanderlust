const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor} = require('../middleware.js');
const reviewController = require("../controllers/reviews.js");

//post route for reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.create));

//delete route for reviews
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroy));

module.exports=router;