const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const clothesItems = require('./models/clothes');
const Case = require('./models/case');
const Skins = require('./models/skins');
const User = require('./models/user');
const seedDB = require('./public/scripts/database/seed');
const calculateWin = require('./public/scripts/helpers/calculatewin');
const updatePrice = require('./public/scripts/helpers/priceupdater');
const passport = require('passport');
const session = require('express-session'); //
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passportSocket = require('passport.socketio');
const SteamStrategy = require('passport-steam').Strategy;
var favicon = require('serve-favicon');
let steamid = null;
//Clothes = require("./models/clothes"),

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection
});



//mongoose.connect("mongodb://localhost/airdrop"); //LOCAL testing
mongoose.connect("mongodb://test:test@ds113700.mlab.com:13700/airdrop2");
//mongoose.connect("mongodb://test:test@ds023463.mlab.com:23463/airdrop");

updatePrice(300000);

seedDB();
//https://pubgcase.herokuapp.com/auth/steam/return
//https://localhost:8080
passport.use(
  new SteamStrategy({
      returnURL: 'https://pubgcase.herokuapp.com/auth/steam/return',
      realm: 'https://pubgcase.herokuapp.com',
      apiKey: '6A4B53A2FD620DE1B7DA7D3E448712D2'
    },
    (identifier, profile, done) => {
      steamid = identifier.match(/\d+$/)[0];

      User.findOne({
        steamid: steamid
      }, function (err, user) {
        if (user) {
          console.log("User already exists");
          return done(err, profile);
        } else {
          const user = new User({
            steamid: steamid,
            tradeurl: '',
            credits: 0,
            items: []
          });
          user.save((err, user) => {
            if (err) {
              console.log(err);
            } else {
              return done(err, profile);
            }
          });
        }
      });
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user._json);
});

passport.deserializeUser((obj, done) => {
  steamid = obj.steamid;
  User.findOne(
    {
      'steamid': obj.steamid
    },
    (err, user) => {
      done(err, user);
    }
  );
});

io.use(
  passportSocket.authorize({
    cookieParser: cookieParser,
    key: 'U_SESSION',
    secret: 'hello',
    store: sessionStore
  })
);


io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('addWinnerItem', function (item) {
    let winnerName = item; //Set winnerName to market_hash_name from client
    console.log(winnerName);
    // Skins.findOne({'market_hash_name': winnerName}, (err, skin) => {
    //   if (err){
    //     console.log(err);
    //   }
    //   else{
    //     const skin_hash_name = skin.
    //     console.log(skin);
    //     console.log(steamid);
    //   }
    // });
    User.update({
        'steamid': steamid
      }, {
        $push: {
          'items': winnerName
        }
      },
      err => {
        if (err) {
          console.log(err);
        }
      });
  });
});

app.use(express.static("public"));
app.set("view engine", "ejs");


app.use(
  session({
    secret: 'hello',
    name: 'U_SESSION',
    resave: true,
    saveUninitialized: true,
    store: sessionStore
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));





app.get('/', (req, res) => {
  req.session.steamid = steamid;
  console.log(req.session.steamid);
  res.render('home', {
    user: req.user,
  });
});



app.get(
  /^\/auth\/steam(\/return)?$/,
  passport.authenticate('steam', {
    failureRedirect: '/wtf'
  }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/inventory', (req, res) => {
  var invArray = [];
  let render = (invArray) => {
    res.render('inventory', {
      user: req.user,
      Items: invArray
    });
  };
  if (req.user) {
    User.find({
      'steamid': steamid
    }, (err, user) => {
      if (user) {
        console.log(user);
        let itemArray = user[0].items;
        let query = [];
        for (i=0;i<itemArray.length;i++){
          console.log(i);
          query.push(Skins.findOne({
            'market_hash_name': itemArray[i]
          }));
        }  
        Promise.all(query).then(function (skins){
          console.log(skins);
          render(skins);
        });
      }
    });
  }
  else{
    res.render('loggedin', 
  {user: req.user});
  }
});


app.get('/clothes', (req, res) => {
  res.render('clothes', {
    user: req.user
  });
});
app.get('/skins', (req, res) => {
  res.render('skins', {
    user: req.user
  });
});
app.get('/retreiveInv', (req, res) => {


});
app.get('/open', (req, res) => {
  let casename = req.query.casename;
  calculateWin(casename, function (result) {
    let calcObject = result;
    //console.log(result);
    let winnerItem = calcObject.winnerNum;
    let randomArray = calcObject.randomArray;
    Case.find({
      casename: casename
    }, (err, allItems) => {
      if (err) {
        //console.log(err);
      } else {
        // console.log(allItems);
        res.send({
          Items: allItems,
          winnerItem: winnerItem,
          randomArray: randomArray,
          user: req.user
        });
      }
    });
  });
});


// app.get('/sell', (req, res) => {
//   let item = req.

// });
app.get('/hatcase/open', (req, res) => {
  if (req.user) {
    res.render("open", {
      casename: "Hat Case",
      user: req.user,
      stringpath: '/scripts/itemvalues/hat.js'
    });
  } else {
    res.render('loggedin', {
      user: req.user
    });
  }


  // res.render('open', {
  //     category: "hats",
  //     winnerItem: winnerItem,
  //     title: "Hats Case"
  // });
});
app.get('/poorriflecase/open', (req, res) => {
  res.render("open", {
    casename: "Poor Rifle Case",
    user: req.user,
    stringpath: '/scripts/itemvalues/hat.js'
  });

  // res.render('open', {
  //     category: "hats",
  //     winnerItem: winnerItem,
  //     title: "Hats Case"
  // });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
var port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Server started");
});