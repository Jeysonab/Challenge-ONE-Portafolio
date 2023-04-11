// scroll de header

window.addEventListener("scroll", function () {
	var header = document.querySelector(".header");
	header.classList.toggle("scroll", window.scrollY > 0);
});

// boton de subida

const upSection = document.querySelector(".up");
const upButton = document.querySelector(".up__go");
const targetSection = document.querySelector("#title");

function isScrolledIntoView(el) {
	const rect = el.getBoundingClientRect();
	const elemTop = rect.top;
	const elemBottom = rect.bottom;

	const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

window.addEventListener("scroll", () => {
	if (window.pageYOffset > targetSection.offsetTop) {
		upSection.classList.add("up--visible");
	} else {
		upSection.classList.remove("up--visible");
	}
});

upButton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// Esconder menu responsive

const headerMenu = document.querySelector(".header__menu");

headerMenu.addEventListener("click", (event) => {
	if (event.target.closest(".menu__list__item")) {
		document.querySelector(".menu-toggle").checked = false;
	}
});
