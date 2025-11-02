/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

function _0x274c(_0x57c8a3,_0x5656a8){const _0x28e9c4=_0x28e9();return _0x274c=function(_0x274c98,_0xedd6ba){_0x274c98=_0x274c98-0x90;let _0x377b42=_0x28e9c4[_0x274c98];return _0x377b42;},_0x274c(_0x57c8a3,_0x5656a8);}const _0x10441b=_0x274c;(function(_0x2d10da,_0x510cef){const _0x59be62=_0x274c,_0x23b09d=_0x2d10da();while(!![]){try{const _0x1cc8a5=parseInt(_0x59be62(0x91))/0x1*(-parseInt(_0x59be62(0xb7))/0x2)+-parseInt(_0x59be62(0xb5))/0x3*(-parseInt(_0x59be62(0xa0))/0x4)+parseInt(_0x59be62(0x9d))/0x5*(parseInt(_0x59be62(0x90))/0x6)+-parseInt(_0x59be62(0x93))/0x7*(-parseInt(_0x59be62(0xa7))/0x8)+parseInt(_0x59be62(0xac))/0x9*(-parseInt(_0x59be62(0xb8))/0xa)+parseInt(_0x59be62(0xb2))/0xb*(-parseInt(_0x59be62(0x9e))/0xc)+-parseInt(_0x59be62(0xa6))/0xd*(-parseInt(_0x59be62(0x92))/0xe);if(_0x1cc8a5===_0x510cef)break;else _0x23b09d['push'](_0x23b09d['shift']());}catch(_0x1deccb){_0x23b09d['push'](_0x23b09d['shift']());}}}(_0x28e9,0x92d40));const form=document['getElementById'](_0x10441b(0x96)),statusMessage=document[_0x10441b(0xb6)]('statusMessage');function _0x28e9(){const _0x39a301=['1106QcqvBW','Trello\x20API\x20error:\x20','error','leadCaptureForm','preventDefault','green','ATTA3558a28abeaf6a6e37ba3bd62f113ff10ad51f392d27e928572e7a2b9acd59fbCAC0A22F','color','Lead\x20Zennty:\x20','submit','6205ytuqJp','12xrqsyP','catch','112764MHJkEZ','statusText','textContent','addEventListener','\x0a**Name:**\x20','leadName','2702375vKOMjA','20840iRDQWn','66174f09b8bdd2b76f41eac2','red','then','leadEmail','47079KGyFeC','Falha\x20ao\x20enviar\x20dados.\x20Por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.','style','https://api.trello.com/1/cards','Dados\x20enviados\x20com\x20sucesso!\x20Em\x20breve\x20nossa\x20equie\x20de\x20especialistas\x20entrará\x20em\x20contato.','value','4262599NVzmwq','trim','stringify','6xSLOst','getElementById','2rnOSuf','70QUXrVB','reset','e55f89501a95adebcf7edb9f406d8dbe','\x0a**Email:**\x20','3558OmZcwY','594101UhhSkZ','28RFgAce'];_0x28e9=function(){return _0x39a301;};return _0x28e9();}form[_0x10441b(0xa3)](_0x10441b(0x9c),function(_0x3f6d5c){const _0x599012=_0x10441b;_0x3f6d5c[_0x599012(0x97)]();const _0x2aca93=document[_0x599012(0xb6)](_0x599012(0xa5))[_0x599012(0xb1)],_0x38675b=document[_0x599012(0xb6)](_0x599012(0xab))[_0x599012(0xb1)],_0x1f4c26=_0x599012(0x9b)+_0x2aca93,_0x49821d=(_0x599012(0xa4)+_0x2aca93+_0x599012(0xbb)+_0x38675b+'\x0a\x20\x20\x20\x20')[_0x599012(0xb3)](),_0x341105={'name':_0x1f4c26,'desc':_0x49821d,'idList':_0x599012(0xa8),'key':_0x599012(0xba),'token':_0x599012(0x99)};fetch(_0x599012(0xaf),{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON[_0x599012(0xb4)](_0x341105)})[_0x599012(0xaa)](_0xd82fa9=>{const _0x52c736=_0x599012;if(_0xd82fa9['ok'])statusMessage[_0x52c736(0xa2)]=_0x52c736(0xb0),statusMessage[_0x52c736(0xae)][_0x52c736(0x9a)]=_0x52c736(0x98),form[_0x52c736(0xb9)]();else throw new Error(_0x52c736(0x94)+_0xd82fa9[_0x52c736(0xa1)]);})[_0x599012(0x9f)](_0x5341cd=>{const _0x32cf81=_0x599012;console[_0x32cf81(0x95)]('Falha\x20ao\x20criar\x20Lead:',_0x5341cd),statusMessage[_0x32cf81(0xa2)]=_0x32cf81(0xad),statusMessage['style'][_0x32cf81(0x9a)]=_0x32cf81(0xa9);});});