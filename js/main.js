// header slider

const btnPrev = document.querySelector('.btnPrev');
const btnMiddle = document.querySelector('.btnMiddle');
const btnNext = document.querySelector('.btnNext');
const headerSlides = document.querySelectorAll('.header__slides');
const headerSliderButtons = document.querySelectorAll('.header__slider-buttons');
const headerSlide1 = document.querySelector('.header__slide1');
const headerSlide2 = document.querySelector('.header__slide2');
const headerSlide3 = document.querySelector('.header__slide3');


headerSlide1.classList.add('header__slides_active');
btnPrev.classList.add('header__slider-buttons_active');


let headerSlidesOpacity = () => {
	for (let i = 0; i < headerSlides.length; i++) {
		headerSlides[i].classList.remove('header__slides_active');
	}
}

let headerSliderBtnActive = () => {
	for (let i = 0; i < headerSliderButtons.length; i++) {
		headerSliderButtons[i].classList.remove('header__slider-buttons_active');
	}
}


btnPrev.addEventListener('click', () => {
	headerSlidesOpacity();
	headerSliderBtnActive();

	btnPrev.classList.add('header__slider-buttons_active');
	headerSlide1.classList.add('header__slides_active');
});

btnMiddle.addEventListener('click', () => {
	headerSlidesOpacity();
	headerSliderBtnActive();

	btnMiddle.classList.add('header__slider-buttons_active');
	headerSlide2.classList.add('header__slides_active');
});

btnNext.addEventListener('click', () => {
	headerSlidesOpacity();
	headerSliderBtnActive();

	btnNext.classList.add('header__slider-buttons_active');
	headerSlide3.classList.add('header__slides_active');
});

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

const track1 = document.querySelector('.track1');
const btnPrev1 = document.querySelector('.btnPrev1');
const btnNext1 = document.querySelector('.btnNext1');
const item1 = document.querySelectorAll('.quotes-sliders');
let position1 = 0;

let checkSize1 = () => {
	// check, when we need turn on the button(btnNext)
	const trackCheck = track1.getBoundingClientRect();
	const doc = document.documentElement.getBoundingClientRect();
	let total = doc.right - trackCheck.right;
	return total;
}


// a start positon the track
let width1 = item1[0].clientWidth;
btnPrev1.style.pointerEvents = "none";


let moveTrack1 = () => {
	track1.style.transform = "translateX(" + position1 + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn1 = () => { // check buttons - check when the button need stops
	position1 === 0 ? btnPrev1.style.pointerEvents = "none" : btnPrev1.style.pointerEvents = "auto" ;
	position1 <= -width1 * 9 ? btnNext1.style.pointerEvents = "none" : btnNext1.style.pointerEvents = "auto" ;
}

if (checkSize1() !== 0 || checkSize1() < 0) {
	btnNext1.addEventListener('click', () => {
		if (checkSize1() >= 0) {
			btnNext1.style.pointerEvents = "none";
		} else {
			position1 -= width1 + 64; // take width the item;

			moveTrack1();
			checkBtn1();
		}
	});
} else {
	btnNext1.style.pointerEvents = "none";
}

btnPrev1.addEventListener('click', () => {
	position1 += width1 + 64; // take width the item;

	moveTrack1();
	checkBtn1();
});

// menu-accordion

let dropButton = document.querySelectorAll('.drop-arrow');
const listAll = document.querySelectorAll('.drop-menu-content');
const list1 = document.querySelector('.drop-menu-content1');
const list2 = document.querySelector('.drop-menu-content2');
const list3 = document.querySelector('.drop-menu-content3');
const list4 = document.querySelector('.drop-menu-content4');
const list5 = document.querySelector('.drop-menu-content5');
const arrow1 = document.querySelector('.drop-arrow1');
const arrow2 = document.querySelector('.drop-arrow2');
const arrow3 = document.querySelector('.drop-arrow3');
const arrow4 = document.querySelector('.drop-arrow4');
const arrow5 = document.querySelector('.drop-arrow5');

let arrow = (e) => {
	for (let i = 0; i < dropButton.length; i++) {
		if (e !== dropButton[i]) {
			dropButton[i].classList.remove('drop-arrow-anim');
		}
	}
}

let dropHide = (e) => {
	for (let i = 0; i < listAll.length; i++) {
		if (e !== listAll[i]) {
			listAll[i].classList.remove('drop-menu-content_active');
		}
	}
}

let drop = (e) => {
	e.classList.toggle('drop-menu-content_active');
}

arrow1.addEventListener('click', (e) => {
	dropHide(list1);
	drop(list1);

	arrow(arrow1);
	arrow1.classList.toggle('drop-arrow-anim');
});


arrow2.addEventListener('click', () => {
	dropHide(list2);
	drop(list2);

	arrow(arrow2);
	arrow2.classList.toggle('drop-arrow-anim');
});


arrow3.addEventListener('click', () => {
	dropHide(list3);
	drop(list3);

	arrow(arrow3);
	arrow3.classList.toggle('drop-arrow-anim');
});


arrow4.addEventListener('click', () => {
	dropHide(list4);
	drop(list4);

	arrow(arrow4);
	arrow4.classList.toggle('drop-arrow-anim');
});


arrow5.addEventListener('click', () => {
	dropHide(list5);
	drop(list5);

	arrow(arrow5);
	arrow5.classList.toggle('drop-arrow-anim');
});
