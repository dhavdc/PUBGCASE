const mongoose = require('mongoose');
const Case = require('../../../models/case');
const clothesItems = require ('../../../models/clothes');


seedDB = () => {
    const hat1 = new clothesItems({
        name: 'hat1',
        image: '/assets/clothes/hats/hat1.png',
        price: "",
        category: "hat",
        percentage: 0.03,
        rarity: 5,
        market_hash_name: 'Cowboy Hat (White)'
      });
      const hat2 = new clothesItems({
        name: 'hat2',
        image: '/assets/clothes/hats/hat2.png',
        price: "",
        category: "hat",
        percentage: 0.025,
        rarity: 4,
        market_hash_name: 'Military Cap (Black)'
      });
    
      const hat3 = new clothesItems({
        name: 'hat3',
        image: '/assets/clothes/hats/hat3.png',
        price: "",
        category: "hat",
        percentage: 0.025,
        rarity: 4,
        market_hash_name: 'Cowboy Hat (Brown)'
      });
      const hat4 = new clothesItems({
        name: 'hat4',
        image: '/assets/clothes/hats/hat4.png',
        price: "",
        category: "hat",
        percentage: 0.08,
        rarity: 3,
        market_hash_name: 'Camo Cap'
      });
      const hat5 = new clothesItems({
        name: 'hat5',
        image: '/assets/clothes/hats/hat5.png',
        price: "",
        category: "hat",
        percentage: 0.05,
        rarity: 2,
        market_hash_name: 'Patrol Cap (Gray)'
      });
      const hat6 = new clothesItems({
        name: 'hat6',
        image: '/assets/clothes/hats/hat6.png',
        price: "",
        category: "hat",
        percentage: 0.05,
        rarity: 2,
        market_hash_name: 'Patrol Cap (Brown)'
      });
      const hat7 = new clothesItems({
        name: 'hat7',
        image: '/assets/clothes/hats/hat7.png',
        price: "",
        category: "hat",
        percentage: 0.05,
        rarity: 2,
        market_hash_name: 'Beanie (Brown)'
      });
      const hat8 = new clothesItems({
        name: 'hat8',
        image: '/assets/clothes/hats/hat8.png',
        price: "",
        category: "hat",
        percentage: 0.138,
        rarity: 1,
        market_hash_name: 'Beanie'
      });
      const hat9 = new clothesItems({
        name: 'hat9',
        image: '/assets/clothes/hats/hat9.png',
        price: "",
        category: "hat",
        percentage: 0.138,
        rarity: 1,
        market_hash_name: 'Beanie (Gray)'
      });
      const hat10 = new clothesItems({
        name: 'hat10',
        image: '/assets/clothes/hats/hat10.png',
        price: "",
        category: "hat",
        percentage: 0.138,
        rarity: 1,
        market_hash_name: 'Vintage Baseball Cap (Black)'
      });
      const hat11 = new clothesItems({
        name: 'hat11',
        image: '/assets/clothes/hats/hat11.png',
        price: "",
        category: "hat",
        percentage: 0.138,
        rarity: 1,
        market_hash_name: 'Vintage Baseball Cap (White)'
      });
      const hat12 = new clothesItems({
        name: 'hat12',
        image: '/assets/clothes/hats/hat12.png',
        price: "",
        category: "hat",
        percentage: 0.138,
        rarity: 1,
        market_hash_name: 'Baseball Cap'
      });
    
    
      const hatCase = new Case({
        casename: "Hat Case",
        items: [
            hat1,
            hat2,
            hat3,
            hat4,
            hat5,
            hat6,
            hat7,
            hat8,
            hat9,
            hat10,
            hat11,
            hat12
        ]
    });
    hatCase.save((err, item) => {
        if (err) {
          console.log(err);
        } else {
          console.log(item);
        }
      });
};
module.exports = seedDB;
  
  
