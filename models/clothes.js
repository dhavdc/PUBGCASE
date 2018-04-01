const mongoose = require ('mongoose');


//THERE ARE 6 RARITIES

let clothesSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    category: String,
    percentage: Number,
    rarity: Number,
    market_hash_name: String
});


module.exports = mongoose.model("Clothes", clothesSchema);
