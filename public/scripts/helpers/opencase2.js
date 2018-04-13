/* Front end script that takes item objects from server and creates 
a carousel with them. It lands on the winning item.  */


let winnerName = '';
let winnerPrice = 0;
let winImage;
let openAgain = false;
let popupBackground;
let buttonLock = false;
let rarityclass;
var socket = io();



let getData = () => {
    $.get('/open', {
        casename: caseNameOBJ
    }, function (data) {
        if (openAgain) {
            console.log("destroyed");
        }
        //console.log(data);
        let dataOBJ = data;
        let rarityArray = [];
        let imageArray = [];
        let itemArray = dataOBJ.Items[0].items;
        let winner = parseInt(dataOBJ.winnerItem);
        winner -= 1;

        //Creating a rarity and image array from the randomArray.
        for (i = 0; i < dataOBJ.randomArray.length; i++) {
            let bet = dataOBJ.randomArray[i] - 1;
            rarityArray.push(itemArray[bet].rarity);
            imageArray.push(itemArray[bet].image);
           /*  console.log(rarityArray);
            console.log(imageArray); */
        }


        winnerName = dataOBJ.Items[0].items[winner].market_hash_name;
        winImage = dataOBJ.Items[0].items[winner].image;
        winnerPrice = dataOBJ.Items[0].items[winner].price;
        let winnerRarity = dataOBJ.Items[0].items[winner].rarity;
        switch (winnerRarity) {
            case 1:
                {
                    popupBackground = 'gray';
                    break;
                }
            case 2:
                {
                    popupBackground = 'green';
                    break;
                }
            case 3:
                {
                    popupBackground = 'blue';
                    break;
                }
            case 4:
                {
                    popupBackground = 'purple';
                    break;
                }
            case 5:
                {
                    popupBackground = 'pink';
                    break;
                }
        }

        for (i = 0; i < 30; i++) { //Append random items to carousel
            let $newdiv = $('<div class="carousel-cell rarity-' + rarityArray[i] + 
            ' card item"><img src="' + imageArray[i] + '"width="250px" height="250px"></div>');
            $('.main-carousel').append($newdiv);
        }
        let $windiv = $('<div class="carousel-cell rarity-' + 
        winnerRarity + ' card item"><img src="' + winImage + '"width="250px" height="250px"></div>');
        $('.main-carousel').append($windiv); //Append winning item
        var $last = $('<div class="carousel-cell rarity-' + 
        rarityArray[5] + ' card item"><img src="' + imageArray[5] + '"width="250px" height="250px"></div>');
        $('.main-carousel').append($last);
        $('.main-carousel').flickity({
            // options
            contain: true,
            draggable: false,
            prevNextButtons: false,
            pageDots: false,
            selectedAttraction: 0.006,
            friction: 0.3

        });
        //Append item showcase
        //console.log(dataOBJ);
        if (!openAgain){
            for (i=0;i<dataOBJ.Items[0].items.length;i++){
                let itemName = dataOBJ.Items[0].items[i].market_hash_name;
                let itemImage = dataOBJ.Items[0].items[i].image;
                let itemRarity = dataOBJ.Items[0].items[i].rarity;
                let $itemcard = $('<div class="col padding-0"><div class="card" style="width: 100%;">' + 
                '<img class="card-img-top rarity-' + itemRarity + '" src="' + itemImage + '"height="150px"><p class="card-title showcase-title">' + itemName +  '</p>' +
                '</div></div>');
                if (i<6){
                    $('.row1').append($itemcard);
                }
                else{
                    $('.row2').append($itemcard);
                }
            }
        }
        else{
            socket.emit('addWinnerItem', winnerName); //First render emit
        }
        
    });
};


//First page load
getData();

$('.btnJump').click(function () {
    if (!openAgain){
        socket.emit('addWinnerItem', winnerName); //First render emit
    }
   // $.get('/addWinnerItem', {winnerName: winnerName});
    if (!buttonLock) {
        $('.btnJump').removeClass('btn-primary');
        $('.btnJump').addClass('btn-danger');
        buttonLock = true;
        if (openAgain) {
            $('.main-carousel').flickity('destroy');
            $('.main-carousel').empty();
            getData();
            sleep(100).then(() => {
                for (i = 0; i < 32; i++) {
                    $('.main-carousel').flickity('next');
                }
            });
        }
        else{
        }
        for (i = 0; i < 32; i++) {
            $('.main-carousel').flickity('next');
        }
        sleep(6000).then(() => {
            buttonLock = false;
            $('.btnJump').removeClass('btn-danger');
            $('.btnJump').addClass('btn-primary');
            $('.btnJump').text("OPEN AGAIN");
           // $('.win-text').text(winnerName + ' ' + "(" + winnerPrice + ")");
            swal({
                title: 'You received:',
                html: '<h2 style="color:black">' + winnerName + ' ' +  winnerPrice +  '</h2>',
                imageUrl: winImage,
                imageWidth: 450,
                imageHeight: 450,
                background: popupBackground,
                imageAlt: 'Custom image',
                animation: false
            });
        });
        }    
    openAgain = true;
});

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
