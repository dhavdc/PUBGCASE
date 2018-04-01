const mongoose = require ('mongoose');


//THERE ARE 6 RARITIES

let caseSchema = new mongoose.Schema({
    casename: String,
    items:[{
        name: String,
        image: String,
        price: String,
        category: String,
        percentage: Number,
        rarity: Number,
        market_hash_name: String
    }]


});


module.exports = mongoose.model("Case", caseSchema);