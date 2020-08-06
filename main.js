// slider number one

const buttonSlide = document.querySelector('#buttonSlide');
const buttonSlideLeft = document.querySelector('#buttonSlideLeft');
const sliders = document.querySelectorAll('.slider');
let counter = 0;


let slider = (anim) => {
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].classList.add('hide');
		if (anim == 1) {
			sliders[i].classList.add('slider-anim');
			sliders[counter].classList.remove('slider-anim2');
		} else if (anim == 2) {
			sliders[i].classList.add('slider-anim2');
			sliders[counter].classList.remove('slider-anim');
		}
	}
	sliders[counter].classList.remove('hide');
	if (anim ==1) {
		sliders[counter].classList.remove('slider-anim');
	} else if (anim == 2) {
		sliders[counter].classList.remove('slider-anim2');
	}
}

buttonSlide.addEventListener("click", function() {
	let anim = 1;
	console.log(anim)
	if (counter + 1 == sliders.length) {
		counter = 0;
	} else {
		counter++;
	}
	slider(anim);
});

buttonSlideLeft.addEventListener("click", function() {
	let anim = 2;
	console.log(anim)
	if (counter - 1 == -1) {
		counter = sliders.length - 1;
	} else {
		counter--;
	}
	slider(anim);
});

// slider number two

let quotesBtn = document.querySelector('.quotes-button');
let quotesSlider = document.querySelector('.quotes-slider');
let counterS = 0;

quotesBtn.addEventListener("click", function() {
	counterS = counterS - 305.2;//486.8;
	if (counterS < -3896) {
		counterS = 181.8;
	}

	quotesSlider.style.left = counterS + "px";

});

// menu-accordion

var dropButton = document.querySelectorAll('.drop-arrow'),
	active = document.getElementsByClassName('panel-active');


Array.from(dropButton).forEach(function(item, i, dropButton) {
	item.addEventListener('click', function(e) {

		if (active.length > 0 && active[0] !== this)
			active[0].classList.remove('panel-active');

		this.classList.toggle('panel-active');
	});
});


Array.from(dropButton).forEach(function(item, i, dropButton) {
	item.addEventListener('click', function(e) {
		this.classList.toggle('drop-arrow-anim');
	});
});
