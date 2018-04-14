const mongoose = require ('mongoose');


//THERE ARE 6 RARITIES

let userSchema = new mongoose.Schema({
    steamid: String,
    tradeurl: String,
    credits: Number,
    items:[]
   
});


module.exports = mongoose.model("User", userSchema);
