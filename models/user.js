const mongoose = require ('mongoose');


//THERE ARE 6 RARITIES

let userSchema = new mongoose.Schema({
    steamid: String,
    tradeurl: String,
    credits: Number,
    items:[{
        name: String,
        image: String,
        price: String,
        category: String,
        rarity: Number,
        market_hash_name: String
    }]
   
});


module.exports = mongoose.model("User", userSchema);
