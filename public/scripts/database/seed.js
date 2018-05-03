const mongoose = require('mongoose');
const Case = require('../../../models/case');
const clothesItems = require('../../../models/clothes');
const Skin = require('../../../models/skins');


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
    market_hash_name: 'Baseball cap'
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

  const rifle1 = new clothesItems({
    name: 'rifle1',
    image: '/assets/clothes/poorrifles/rifle1.png',
    price: "",
    category: "rifle",
    percentage: 0.01,
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - M416'
  });
  const rifle2 = new clothesItems({
    name: 'rifle2',
    image: '/assets/clothes/poorrifles/rifle2.png',
    price: "",
    category: "rifle",
    percentage: 0.04,
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - AKM'
  });
  const rifle3 = new clothesItems({
    name: 'rifle3',
    image: '/assets/clothes/poorrifles/rifle3.png',
    price: "",
    category: "rifle",
    percentage: 0.05,
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - SCAR-L'
  });
  const rifle4 = new clothesItems({
    name: 'rifle4',
    image: '/assets/clothes/poorrifles/rifle4.png',
    price: "",
    category: "rifle",
    percentage: 0.05,
    rarity: 3,
    market_hash_name: 'Desert Digital - Mini14'
  });
  const rifle5 = new clothesItems({
    name: 'rifle5',
    image: '/assets/clothes/poorrifles/rifle5.png',
    price: "",
    category: "rifle",
    percentage: 0.25,
    rarity: 1,
    market_hash_name: 'Rugged (Beige) - M16A4'
  });
  const rifle6 = new clothesItems({
    name: 'rifle6',
    image: '/assets/clothes/poorrifles/rifle6.png',
    price: "",
    category: "rifle",
    percentage: 0.60,
    rarity: 1,
    market_hash_name: 'Rugged (Beige) - SKS'
  });

  const poorriflecase = new Case({
    casename: "Poor Rifle Case",
    items: [
      rifle1,
      rifle2,
      rifle3,
      rifle4,
      rifle5,
      rifle6,
    ]
  });
  poorriflecase.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  }); 

  const shat1 = new Skin({
    name: 'hat1',
    image: '/assets/clothes/hats/hat1.png',
    sellPrice: "",
    category: "hat",
    rarity: 5,
    market_hash_name: 'Cowboy Hat (White)'
  });
  const shat2 = new Skin({
    name: 'hat2',
    image: '/assets/clothes/hats/hat2.png',
    sellPrice: "",
    category: "hat",
    rarity: 4,
    market_hash_name: 'Military Cap (Black)'
  });
  
  const shat3 = new Skin({
    name: 'hat3',
    image: '/assets/clothes/hats/hat3.png',
    sellPrice: "",
    category: "hat",
    rarity: 4,
    market_hash_name: 'Cowboy Hat (Brown)'
  });
  const shat4 = new Skin({
    name: 'hat4',
    image: '/assets/clothes/hats/hat4.png',
    sellPrice: "",
    category: "hat",
    rarity: 3,
    market_hash_name: 'Camo Cap'
  });
  const shat5 = new Skin({
    name: 'hat5',
    image: '/assets/clothes/hats/hat5.png',
    sellPrice: "",
    category: "hat",
    rarity: 2,
    market_hash_name: 'Patrol Cap (Gray)'
  });
  const shat6 = new Skin({
    name: 'hat6',
    image: '/assets/clothes/hats/hat6.png',
    sellPrice: "",
    category: "hat",
    rarity: 2,
    market_hash_name: 'Patrol Cap (Brown)'
  });
  const shat7 = new Skin({
    name: 'hat7',
    image: '/assets/clothes/hats/hat7.png',
    sellPrice: "",
    category: "hat",
    rarity: 2,
    market_hash_name: 'Beanie (Brown)'
  });
  const shat8 = new Skin({
    name: 'hat8',
    image: '/assets/clothes/hats/hat8.png',
    sellPrice: "",
    category: "hat",
    rarity: 1,
    market_hash_name: 'Beanie'
  });
  const shat9 = new Skin({
    name: 'hat9',
    image: '/assets/clothes/hats/hat9.png',
    sellPrice: "",
    category: "hat",
    rarity: 1,
    market_hash_name: 'Beanie (Gray)'
  });
  const shat10 = new Skin({
    name: 'hat10',
    image: '/assets/clothes/hats/hat10.png',
    sellPrice: "",
    category: "hat",
    rarity: 1,
    market_hash_name: 'Vintage Baseball Cap (Black)'
  });
  const shat11 = new Skin({
    name: 'hat11',
    image: '/assets/clothes/hats/hat11.png',
    sellPrice: "",
    category: "hat",
    rarity: 1,
    market_hash_name: 'Vintage Baseball Cap (White)'
  });
  const shat12 = new Skin({
    name: 'hat12',
    image: '/assets/clothes/hats/hat12.png',
    sellPrice: "",
    category: "hat",
    rarity: 1,
    market_hash_name: 'Baseball cap'
  });
  shat1.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat2.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat3.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat4.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat5.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat6.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat7.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat8.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat9.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat10.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat11.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  shat12.save((err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item);
    }
  });
  const srifle1 = new Skin({
    name: 'rifle1',
    image: '/assets/clothes/poorrifles/rifle1.png',
    sellPrice: "",
    category: "rifle",
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - M416'
  });
  const srifle2 = new Skin({
    name: 'rifle2',
    image: '/assets/clothes/poorrifles/rifle2.png',
    sellPrice: "",
    category: "rifle",
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - AKM'
  });
  const srifle3 = new Skin({
    name: 'rifle3',
    image: '/assets/clothes/poorrifles/rifle3.png',
    sellPrice: "",
    category: "rifle",
    rarity: 2,
    market_hash_name: 'Rugged (Orange) - SCAR-L'
  });
  const srifle4 = new Skin({
    name: 'rifle4',
    image: '/assets/clothes/poorrifles/rifle4.png',
    sellPrice: "",
    category: "rifle",
    rarity: 3,
    market_hash_name: 'Desert Digital - Mini14'
  });
  const srifle5 = new Skin({
    name: 'rifle5',
    image: '/assets/clothes/poorrifles/rifle5.png',
    sellPrice: "",
    category: "rifle",
    rarity: 1,
    market_hash_name: 'Rugged (Beige) - M16A4'
  });
  const srifle6 = new Skin({
    name: 'rifle6',
    image: '/assets/clothes/poorrifles/rifle6.png',
    sellPrice: "",
    category: "rifle",
    rarity: 1,
    market_hash_name: 'Rugged (Beige) - SKS'
  });
  srifle1.save();
  srifle2.save();
  srifle3.save();
  srifle4.save();
  srifle5.save();
  srifle6.save();
};

/* Poor Rifle Case */


/* Skins collection */





module.exports = seedDB;