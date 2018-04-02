var weighted = require('weighted')
const mongoose = require('mongoose');
const Case = require('../../../models/case');


calculate = (casename, cb) => {

    Case.find({
        casename: casename
    }, function (err, caseItems) {
        if (err) {
            console.log(err);
        } else {
            let itemarray = [];
            let chancearray = [];
            console.log("ITEM LENGTH: " + caseItems[0].items.length);
            for (i = 0; i < caseItems[0].items.length; i++) {
                console.log(i);
                let name = caseItems[0].items[i].name;
                let chance = caseItems[0].items[i].percentage;
                console.log(name);
                console.log(chance);
                itemarray.push(name);
                chancearray.push(chance);
            }
            console.log(itemarray);
            console.log(chancearray);
            let randomArray = [];
            for (i=0;i<30;i++){
                let random = weighted(itemarray, chancearray);
                let randomSanitize = random.replace(/[^0-9]/g,'');
                randomArray.push(randomSanitize);
            }
            let winner = weighted(itemarray, chancearray);
            let winnerNum = winner.replace(/[^0-9]/g,'');
            let calcObject = {winnerNum: winnerNum,randomArray: randomArray};
            return cb(calcObject);

        }
    });

};
module.exports = (casename, cb) => {
    calculate(casename, cb);

};
