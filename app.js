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
const seedDB = require ('./public/scripts/database/seed');
const calculateWin = require('./public/scripts/helpers/calculatewin');
const updatePrice = require ('./public/scripts/helpers/priceupdater');
var favicon = require('serve-favicon');
//Clothes = require("./models/clothes"),

//mongoose.connect("mongodb://localhost/airdrop"); //LOCAL testing
mongoose.connect("mongodb://test:test@ds023463.mlab.com:23463/airdrop");

const app = express();

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.set("view engine", "ejs");
//seedDB();

  
updatePrice(10 * 60000 );


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

    calculateWin("Hat Case", function(result){
        let calcObject = result;
        console.log(result);
        let winnerItem = calcObject.winnerNum;
        let randomArray = calcObject.randomArray;
        Case.find({casename: "Hat Case"}, (err, allItems) => {
            if (err){
              console.log(err);
            } else{
                console.log(allItems);
              res.render("open", {Items: allItems, winnerItem: winnerItem, randomArray: randomArray});
            }
          });
        
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
