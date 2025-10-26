const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose=require('mongoose');
const initData =require('./data.js');
const Listing=require("../models/listing.js");

main()
.then(()=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);

}

const initDB= async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
      ...obj, 
      owner:"68fdb6992a3c5192b9c992c7"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();