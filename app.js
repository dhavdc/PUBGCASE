// const SteamUser = require("steam-user");
// const SteamTotp = require("steam-totp");
// const SteamCommunity = require("steamcommunity");
// const TradeOfferManager = require("steam-tradeoffer-manager");

// const client = new SteamUser();
// const community = new SteamCommunity();
// const manager = new TradeOfferManager({
//     steam: client,
//     community: community,
//     language: 'en'
// });

// const logOnOptions = {
//     accountName: 'kushpushups',
//     password: 'T9w67b53a12a$s!5831',
//     twoFactorCode: SteamTotp.generateAuthCode('skrt')
// };

// client.logOn(logOnOptions);

// client.on("loggedOn", () => {
//     console.log("Logged into steam!");
//     client.setPersona(SteamUser.Steam.EPersonaState.Online);
//     client.gamesPlayed(730);
// });

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const clothesItems = require ('./models/clothes');
const Case = require('./models/case');
const updatePrice = require ('./public/scripts/helpers/priceupdater');
var favicon = require('serve-favicon');
//Clothes = require("./models/clothes"),

mongoose.connect("mongodb://localhost/airdrop"); //LOCAL testing

const app = express();

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.set("view engine", "ejs");


// const hat1 = new clothesItems({
//     name: 'hat1',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat2 = new clothesItems({
//     name: 'hat2',
//     image: '/assets/clothes/hat2.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hatCase = new Case({
//       casename: "Hat Case",
//       items: [
//           hat1,
//           hat2
//       ]

//   });
//   hatCase.save((err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(item);
//     }
//   });

//   const hat3 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat4 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat5 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat6 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat7 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat8 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat9 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });
//   const hat10 = new clothesItems({
//     name: 'Cowboy Hat (White)',
//     image: '/assets/clothes/hat1.png',
//     price: "",
//     category: "hat",
//     percentage: 2,
//     rarity: 5,
//     market_hash_name: 'Cowboy Hat (White)'
//   });

  
  
  
//updatePrice(10000);


app.get('/', (req, res) => {
    res.render('home', {
        title: "Hello World",
        message: "This is a message on handlebars!"
    });
});
app.get('/clothes1', (req, res) => {
    res.render('clothes1');
});
app.get('/hatcase/open', (req, res) => {
    let winnerItem = Math.floor(Math.random() * 12) + 1;

    Case.find({casename: "Hat Case"}, (err, allItems) => {
        if (err){
          console.log(err);
        } else{
            console.log(allItems);
          res.render("open", {Items: allItems, winnerItem: winnerItem});
        }
      });
    // res.render('open', {
    //     category: "hats",
    //     winnerItem: winnerItem,
    //     title: "Hats Case"
    // });
});
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Server has started");
