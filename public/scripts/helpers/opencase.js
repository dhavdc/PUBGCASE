let openAgain = false;
let repeat = false;
let winnerPrice = '';
let winImageG = '';
let winnerG = 0;

let owl = $('.owl-carousel');


let casename = caseNameOBJ; //Case name object 

cb = (cb) => {
	dataOBJ = cb;
	console.log(dataOBJ);
};

getData = () => {

	jQuery.get('/open', {
		casename: casename
	}, function (data) {


		itemsOBJ = data;
		console.log(itemsOBJ);
		let rarityArray = [];
		let imageArray = [];

		let dataOBJ = data;
		itemArray = dataOBJ.Items[0].items;
		console.log(dataOBJ.Items[0].items.length);
		console.log(dataOBJ.randomArray);

		for (i = 0; i < dataOBJ.randomArray.length; i++) {
			let bet = dataOBJ.randomArray[i] - 1;
			console.log(bet);
			//console.log(ItemsObject[0].items[10].rarity)
			rarityArray.push(itemArray[bet].rarity);
			imageArray.push(itemArray[bet].image);
			console.log(rarityArray);
			console.log(imageArray);
		}
		console.log(rarityArray);
		//let rarity = ItemsObject[0].items[randomArray].rarity;
		//let randomimage = ItemsObject[0].items[random].image;

		let winner = parseInt(dataOBJ.winnerItem);
		winner = winner - 1;
		winnerName = dataOBJ.Items[0].items[winner].market_hash_name;
		let winImage = dataOBJ.Items[0].items[winner].image;
		winnerPrice = dataOBJ.Items[0].items[winner].price;

		switch (dataOBJ.Items[0].items[winner].rarity) {
			case 1:
				raritycss = 1;
				b_color = 'gray';
				break;
			case 2:
				b_color = 'green';
				raritycss = 2;
				break;
			case 3:
				b_color = 'blue';
				raritycss = 3;
				break;
			case 4:
				b_color = 'purple';
				raritycss = 4;
				break;
			case 5:
				b_color = 'pink';
				raritycss = 5;
				break;
		}
		for (i = 0; i < 30; i++) {
			var $newdiv = $('<div class="rarity-' + rarityArray[i] + ' card item"><img src="' + imageArray[i] + '"width="300px" height="300px"></div>');
			$('.owl-carousel').append($newdiv);
			console.log("Appended " + i);
		}

		var $windiv = $('<div class="rarity-' + raritycss + ' card item"><img src="' + winImage + '"width="300px" height="300px"></div>');
		$('.owl-carousel').append($windiv);
		console.log("Appended Winner: " + winner);
		var $hm = $('<div class="rarity-' + rarityArray[29] + ' card item"><img src="' + imageArray[29] + '"width="300px" height="300px"></div>');
		$('.owl-carousel').append($hm);
		console.log("Last one Append: " + $hm);
		owl.owlCarousel({
			loop: false,
			margin: 10,
			touchDrag: false,
			mouseDrag: false,

			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	});
};
if (!openAgain) {
	getData();
}
$('.btnJump').click(function () {
	var sleeptime = 6000;
	if (openAgain) {
		//owl.trigger('destroy.owl.carousel', [i]);


		sleep(1000).then(() => {
			getData();
		});
		sleep(1000).then(() => {
			for (i = 0; i < 32; i++) {
				owl.trigger('next.owl.carousel', [6000]); //6 seconds
			}

		});
	} else {
		for (i = 0; i < 32; i++) {
			owl.trigger('next.owl.carousel', [6000]); //6 seconds
		}

	}

	sleep(sleeptime).then(() => { //6 seconds to match the roll
		$('.win-text').text(winnerName + ' ' + "(" + winnerPrice + ")");
		// swal({
		// 	title: 'Sweet!',
		// 	html: '<h2 style="color:black">' + 'You receieved a ' + ' ' + winnerName + '</h2>',
		// 	imageUrl: winImage,
		// 	imageWidth: 450,
		// 	imageHeight: 350,
		// 	background: b_color,
		// 	imageAlt: 'Custom image',
		// 	animation: false
		// });
		openAgain = true;
	});

});



let raritycss = 0;
let b_color = '';


function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}


console.log("WINNER: " + winnerG);