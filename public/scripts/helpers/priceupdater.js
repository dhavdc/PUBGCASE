const market = require('steam-market-pricing');
const Case = require('../../../models/case');
const Skins = require('../../../models/skins');
var OPSkinsAPI = require('@opskins/api');
var opskins = new OPSkinsAPI('70b2464cd8f36ec809e363efcea3dd');
var request = require('request');


//marketprice.getItemPrices(578080, 'Cowboy Hat (White)');
/* jshint ignore:start */

/* jshint ignore:end */
//ADD UPDATES TO SELL PRICES TOO!



let update = () => {
    Skins.find({}, function (err, allSkins) {
        if (err) {
            console.log(err);
        } else {
            opskins.getLowestPrices(578080, (err, prices) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(prices);
                    for (i = 0; i < allSkins.length; i++) {
                        let skin = allSkins[i].market_hash_name;
                        let priceSkin = prices[skin].price;
                        // console.log(allSkins[i].market_hash_name);
                        //  let price = prices[i].market_value;
                        //  console.log(price);
                        Skins.update({
                                'market_hash_name': skin
                            }, {
                                $set: {
                                    'sellPrice': priceSkin
                                }
                            },
                            err => {
                                if (err) {
                                    console.log(err);
                                }
                            });
                    }
                }
            });

        }
    });
};

module.exports = interval => {
    update();
    setInterval(update, interval);
};