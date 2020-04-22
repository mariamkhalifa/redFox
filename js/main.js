(function(){

let burgerMenu = document.querySelector('#burgerMenu'),
	burgerBtn = document.querySelector('.hamburger'),
	downBtn = document.querySelector('.downArrow'),
	mediaQuery1 = window.matchMedia('(min-width: 1024px)'),
	mediaQuery2 = window.matchMedia('(min-width: 767px)'),
	//productsLink = document.querySelector('#productsLink'),
	//aboutLink = document.querySelector('#aboutLink'),
	//contactLink = document.querySelector('#contactLink'),
	scrollTop = document.querySelector('#scrollTop'),
	productReveal = document.querySelector('.productReveal'),
	protectiveCon = document.querySelector('.protect-show'),
	form = document.querySelector('#contactForm'),
	formMsg = document.querySelector('.formMsg'),
	submitContact = document.querySelector('#submit');


let waypoint = new Waypoint({
		element: document.getElementById('products'),
		handler: function(direction) {
		  console.log('Scrolled to waypoint!')
		  scrollTop.style.opacity = "1";
		}
	  })

// console.log(productsLink);
// console.log(aboutLink);
// console.log(contactLink);

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

// function scrollToProducts(e){
// 	e.preventDefault;
// 	if (mediaQuery1.matches) {
// 		TweenLite.to(window, 1, {scrollTo:{y:740}});
// 	}
// 	else if (mediaQuery2.matches) {
// 		TweenLite.to(window, 1, {scrollTo:{y:970}});
// 	}
// 	else {
// 		TweenLite.to(window, 1, {scrollTo:{y:700}})
// 	}
// }

// function scrollToAbout(e){
// 	e.preventDefault;
// 	if (mediaQuery1.matches) {
// 		TweenLite.to(window, 1, {scrollTo:{y:1800}});
// 	}
// 	else if (mediaQuery2.matches) {
// 		TweenLite.to(window, 1, {scrollTo:{y:2700}});
// 	}
// 	else {
// 		TweenLite.to(window, 1, {scrollTo:{y:2800}})
// 	}
// }

//

function scrollToTop() {
	TweenLite.to(window, 1, {scrollTo:{y:0}});
}

function revealProtective() {
	console.log('revealed');
	protectiveCon.classList.toggle('revealed');
	productReveal.classList.toggle('rotated');
	//TweenLite.to('.productReveal', {rotation:180, duration:.5});
}

function handleMail(e) {
	e.preventDefault();

	let formdata = new FormData(form),
		maildata = {};

	for (let [key,value] of formdata.entries()) {
		maildata[key] = value;
	}

	if (maildata.name !== "" && maildata.email !== "" && maildata.subject !== "" && maildata.message !== "" ) {
		let url = './contact/data_contact.php';

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-type': 'application/json'
			},
			body: JSON.stringify(maildata)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			formMsg.textContent = data;
		})
		.catch(err => console.log(err));
	} else {
		formMsg.textContent = 'Please fill out the required fields!'
	}

	
}

burgerBtn.addEventListener('click', toggleMenu);
downBtn.addEventListener('click', scrollDown);
//productsLink.addEventListener('click', scrollToProducts);
//aboutLink.addEventListener('click', scrollToAbout);
//contactLink.addEventListener('click', scrollToContact);
scrollTop.addEventListener('click', scrollToTop);
productReveal.addEventListener('click', revealProtective);
submitContact.addEventListener('click', handleMail);


})();