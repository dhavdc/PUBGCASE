
let randomAppend = () => {
	let random = Math.floor(Math.random() * 12) + 1;
	let randomimage = ItemsObject.items[random].image;
	var $newdiv = $('<div class="card item"><img src="' + randomimage + '"width="300px" height="300px"></div>');
	$('.owl-carousel').append($newdiv);

};

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
  }
  
for (i = 0; i < 30; i++) {
	randomAppend();
}

let winImage = ItemsObject.items[winnerItem].image;
var $windiv = $('<div class="card item win-item"><img src="' + winImage + '"width="300px" height="300px"></div>');
$('.owl-carousel').append($windiv);
randomAppend();




$(document).ready(function () {

	var owl = $('.owl-carousel');
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

	$('.btnJump').click(function () {
		for (i = 0; i < 32; i++) {
			owl.trigger('next.owl.carousel', [6000]); //6 seconds
			console.log("Triggered" + i);
		}
		sleep(6000).then(() => { //6 seconds to match the roll
			$('.win-text').text(winningString);
		});
		


	});

});