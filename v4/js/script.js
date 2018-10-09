// Constants
const article = document.querySelector("article");
const footer = document.querySelector("footer");
const hamburger = document.querySelector(".hamburger");
const options = document.querySelector(".header-options");
const section = document.querySelectorAll("section");

// Functions
const actionOnWindowResize = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth >= 668) {
		options.style.display = "block";
		return;
	}
	options.style.display = "none";
	hamburger.classList.remove("change");
};
const animateHamburger = () => {
	hamburger.classList.toggle("change");
	if (hamburger.classList.contains("change")) {
		options.style.display = "block";
    for (let i = 0; i < section.length; i++) {
      section[i].addEventListener("click", noMenuDisplay);
    } 
    article.addEventListener("click", noMenuDisplay);
    footer.addEventListener("click", noMenuDisplay);
		return;
	}
	options.style.display = "none";
	actionOnWindowResize();
};

const noMenuDisplay = () => {
  hamburger.classList.toggle("change");
	options.style.display = "none";
  for (var i = 0; i < section.length; i++) {
    section[i].removeEventListener("click", noMenuDisplay);
  }
  article.removeEventListener("click", noMenuDisplay);
  footer.removeEventListener("click", noMenuDisplay);
};

// Event listeners
hamburger.addEventListener("click", animateHamburger);
window.addEventListener("resize", actionOnWindowResize);