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

const TRELLO_API_KEY = "e55f89501a95adebcf7edb9f406d8dbe";
const TRELLO_TOKEN = "ATTA3558a28abeaf6a6e37ba3bd62f113ff10ad51f392d27e928572e7a2b9acd59fbCAC0A22F";
const TRELLO_LIST_ID = "66174f09b8bdd2b76f41eac2";

const form = document.getElementById('leadCaptureForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('leadName').value;
    const email = document.getElementById('leadEmail').value;

    const cardName = `Lead Zennty: ${name}`;
    const cardDescription = `
**Name:** ${name}
**Email:** ${email}
    `.trim(); // Using trim() to remove leading/trailing whitespace

    const cardData = {
        name: cardName,
        desc: cardDescription,
        idList: TRELLO_LIST_ID,
        key: TRELLO_API_KEY,
        token: TRELLO_TOKEN
    };

    // Use the Fetch API to send the data to Trello
    fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    })
    .then(response => {
        if (response.ok) {
            statusMessage.textContent = 'Dados enviados com sucesso! Em breve nossa equie de especialistas entrará em contato.';
            statusMessage.style.color = 'green';
            form.reset(); // Reset the form fields
        } else {
            throw new Error('Trello API error: ' + response.statusText);
        }
    })
    .catch(error => {
        console.error('Falha ao criar Lead:', error);
        statusMessage.textContent = 'Falha ao enviar dados. Por favor, tente novamente mais tarde.';
        statusMessage.style.color = 'red';
    });
});