// Constants
const navB = document.querySelector(".nav-b");
const navBItemContainer = document.querySelector(".nav-b-item-container");

// Functions
const actionOnWindowResize = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth >= 577) {
		navBItemContainer.style.display = "block";
		return;
	}
	navBItemContainer.style.display = "none";
	navB.classList.remove("change");
};
const animateHamburger = () => {
	navB.classList.toggle("change");
	if (navB.classList.contains("change")) {
		navBItemContainer.style.display = "block";
		return;
	}
	navBItemContainer.style.display = "none";
	actionOnWindowResize();
};
const dateForCopyright = () => {
	const date = new Date();
	const year = date.getFullYear();
	const navC = document.querySelector(".nav-c");
	const toRemove = document.querySelector("#copyright");
	const p = document.createElement("P");
	const sentence = `&copy isaac anderson 2017 - ${year}`;
	p.innerHTML = sentence;
	navC.removeChild(toRemove);
	navC.appendChild(p);
};

// Event listeners
navB.addEventListener("click", animateHamburger);
window.addEventListener("resize", actionOnWindowResize);

// Run functions
dateForCopyright();