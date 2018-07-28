"use strict";

// Constants
var navB = document.querySelector(".nav-b");
var navBItemContainer = document.querySelector(".nav-b-item-container");

// Functions
var actionOnWindowResize = function actionOnWindowResize() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 577) {
		navBItemContainer.style.display = "block";
		return;
	}
	navBItemContainer.style.display = "none";
	navB.classList.remove("change");
};
var animateHamburger = function animateHamburger() {
	navB.classList.toggle("change");
	if (navB.classList.contains("change")) {
		navBItemContainer.style.display = "block";
		return;
	}
	navBItemContainer.style.display = "none";
	actionOnWindowResize();
};
var dateForCopyright = function dateForCopyright() {
	var date = new Date();
	var year = date.getFullYear();
	var navC = document.querySelector(".nav-c");
	var toRemove = document.querySelector("#copyright");
	var p = document.createElement("P");
	var sentence = "&copy isaac anderson 2017 - " + year;
	p.innerHTML = sentence;
	navC.removeChild(toRemove);
	navC.appendChild(p);
};

// Event listeners
navB.addEventListener("click", animateHamburger);
window.addEventListener("resize", actionOnWindowResize);

// Run functions
dateForCopyright();