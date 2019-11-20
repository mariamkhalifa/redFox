(function(){

let burgerMenu = document.querySelector('#burgerMenu'),
	burgerBtn = document.querySelector('.hamburger'),
	downBtn = document.querySelector('.downArrow'),
	mediaQuery1 = window.matchMedia('(min-width: 1024px)'),
	mediaQuery2 = window.matchMedia('(min-width: 768px)'),
	productsLink = document.querySelector('#productsLink'),
	aboutLink = document.querySelector('#aboutLink'),
	contactLink = document.querySelector('#contactLink');

console.log(productsLink);
console.log(aboutLink);
console.log(contactLink);

function toggleMenu(){
	burgerMenu.classList.toggle('slideToggle');
	burgerBtn.classList.toggle('expanded');
}

function scrollDown(e){
	e.preventDefault;
		if (mediaQuery1.matches) {
			TweenLite.to(window, 1, {scrollTo:{y:740}});
		}
		else if (mediaQuery2.matches) {
			TweenLite.to(window, 1, {scrollTo:{y:860}});
		}
		else {
			TweenLite.to(window, 1, {scrollTo:{y:530}});
		}
}

function scrollToProducts(e){
	e.preventDefault;
	if (mediaQuery1.matches) {
		TweenLite.to(window, 1, {scrollTo:{y:740}});
	}
	else if (mediaQuery2.matches) {
		TweenLite.to(window, 1, {scrollTo:{y:970}});
	}
	else {
		TweenLite.to(window, 1, {scrollTo:{y:700}})
	}
}

function scrollToAbout(e){
	e.preventDefault;
	e.preventDefault;
	if (mediaQuery1.matches) {
		TweenLite.to(window, 1, {scrollTo:{y:1540}});
	}
	else if (mediaQuery2.matches) {
		TweenLite.to(window, 1, {scrollTo:{y:2800}});
	}
	else {
		TweenLite.to(window, 1, {scrollTo:{y:2500}})
	}
}

burgerBtn.addEventListener('click', toggleMenu);
downBtn.addEventListener('click', scrollDown);
productsLink.addEventListener('click', scrollToProducts);
aboutLink.addEventListener('click', scrollToAbout);
contactLink.addEventListener('click', scrollToAbout);



})();