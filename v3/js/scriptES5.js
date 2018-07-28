"use strict";

// Constants
var article = document.querySelector("article");
var footer = document.querySelector("footer");
var hamburger = document.querySelector(".hamburger");
var options = document.querySelector(".header-options");
var section = document.querySelectorAll("section");

// Functions
var actionOnWindowResize = function actionOnWindowResize() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 668) {
    options.style.display = "block";
    return;
  }
  options.style.display = "none";
  hamburger.classList.remove("change");
};
var animateHamburger = function animateHamburger() {
  hamburger.classList.toggle("change");
  if (hamburger.classList.contains("change")) {
    options.style.display = "block";
    for (var i = 0; i < section.length; i++) {
      section[i].addEventListener("click", noMenuDisplay);
    }
    article.addEventListener("click", noMenuDisplay);
    footer.addEventListener("click", noMenuDisplay);
    return;
  }
  options.style.display = "none";
  actionOnWindowResize();
};

var noMenuDisplay = function noMenuDisplay() {
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
