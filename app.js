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
var favicon = require('serve-favicon');

const app = express();

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home', {
        title: "Hello World",
        message: "This is a message on handlebars!"
    });
});
app.get('/clothes1', (req, res) => {
    res.render('clothes1');
})
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Server has started");
