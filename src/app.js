const hamburger = document.getElementById("hamburger-button");
const open = document.getElementById("hamburger-open");
const close = document.getElementById("hamburger-close");
const mobileMenu = document.getElementById("mobile-menu");
open.addEventListener("click", () => {
	open.setAttribute("class", "hidden");
	close.setAttribute("class", "block h-6 w-6");
	mobileMenu.setAttribute("class", "flex");
});
close.addEventListener("click", () => {
	close.setAttribute("class", "hidden");
	open.setAttribute("class", "block h-6 w-6");
	mobileMenu.setAttribute("class", "hidden");
});
