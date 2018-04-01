const market = require('steam-market-pricing');
const ClothesItems = require('../../../models/clothes');


//marketprice.getItemPrices(578080, 'Cowboy Hat (White)');
/* jshint ignore:start */

async function getPrice(marketname) { //Later maybe request all items at same time so no timeout 
    return await market.getItemPrice(578080, marketname).then(item => {
        return item
    });
    //return response.median_price;
}
/* jshint ignore:end */

update = () => {
    ClothesItems.find({}, function (err, allClothes) {
        if (err) {
            console.log(err);
        } else {
            console.log(allClothes);
            for (i = 0; i < allClothes.length; i++) {
                console.log(allClothes[i].market_hash_name);
                let response = getPrice(allClothes[i].market_hash_name);
                let id = allClothes[i]._id;
                response.then(function (item) {
                    let price = (item.median_price);
                    ClothesItems.update({
                            _id: id
                        }, {
                            $set: {
                                price: price
                            }
                        },
                        err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                });
            }
        }
    });
};

module.exports = interval => {
    update();
    setInterval(update, interval);
};