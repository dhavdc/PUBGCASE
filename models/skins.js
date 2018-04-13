const mongoose = require ('mongoose');


//THERE ARE 6 RARITIES

let skinsSchema = new mongoose.Schema({
    name: String,
    image: String,
    sellPrice: String,
    category: String,
    rarity: Number,
    market_hash_name: String
});


module.exports = mongoose.model("Skins", skinsSchema);
