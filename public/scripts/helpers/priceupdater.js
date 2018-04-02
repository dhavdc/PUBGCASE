const market = require('steam-market-pricing');
const Case = require('../../../models/case');


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
    Case.find({}, function (err, allSkins) {
        if (err) {
            console.log(err);
        } else {
            console.log(allSkins);
            for (i = 0; i < allSkins[0].items.length; i++) {
                console.log(allSkins[0].items[i].market_hash_name);
                let response = getPrice(allSkins[0].items[i].market_hash_name);
                let id = allSkins[0].items[i]._id;
                response.then(function (item) {
                    let price = (item.median_price);
                    Case.update({
                            'items._id': id
                        }, {
                            $set: {
                                'items.$.price': price
                            }
                        },
                        err => {
                            if (err) {
                                console.log(err);
                            }
                        });
                });
                response.catch(error => {
                    console.log(error);

                });
            }
        }
    });
};

module.exports = interval => {
    update();
    setInterval(update, interval);
};