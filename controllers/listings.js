const Listing = require("../models/listing");
const nominatim = require('nominatim-client');

const client = nominatim.createClient({
  useragent: `WanderlustApp/1.0 (${process.env.NOMINATIM_EMAIL})`,
  referer: 'http://localhost:3000/listings'
});


//index
module.exports.index = async(req,res)=>{
    const { category } = req.query; // get ?category= from URL
  let allListings;

  if (category) {
    // if a category filter is applied
    allListings = await Listing.find({ category });
  } else {
    // otherwise show all
    allListings = await Listing.find({});
  }
    res.render("listings/index.ejs",{allListings, category});
};

//new
module.exports.new=(req,res)=>{
    res.render("listings/new.ejs");
};

//show
module.exports.show=async (req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id)
    .populate({path: "reviews", populate:{path:"author"}})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

//create
module.exports.create=async(req,res)=>{
    let {location}=req.body.listing;
    let coordinate = {
       q: `${location}`,
       addressdetails: '1'
    };
    const result = await client.search(coordinate);
    const geometry = result.length > 0
      ? { type: "Point", coordinates: [parseFloat(result[0].lon), parseFloat(result[0].lat)] }
      : { type: "Point", coordinates: [0, 0] };
    let url= req.file.path;
    let filename= req.file.filename;
    const newListing =new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.geometry= geometry;
    newListing.image={filename, url};
    await newListing.save();
    req.flash("success", "New Listing created successfully!");
    res.redirect("/listings");
};

//edit
module.exports.edit=async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalListing= listing.image.url;
    originalListing= originalListing.replace("/upload","/upload/w_200");
    res.render("listings/edit.ejs",{listing, originalListing});
};

//update
module.exports.update=async (req, res) => {
  let { id } = req.params;
  let listing =await Listing.findByIdAndUpdate(id, {...req.body.listing});
  if(req.file){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image={ url, filename};
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.delete=async(req,res)=>{
    let {id}=req.params;
    let deletedListing =await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.searchListing=async (req, res) => {
  const query = req.query.q;
    const listings = query? await Listing.find({
          $or: [
            { title: { $regex: query, $options: "i" } },
            { location: { $regex: query, $options: "i" } },
            { country: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ],
        })
      : await Listing.find({});

    res.render("listings/index", { allListings: listings, searchQuery: query });
};