// Constants
const linksInArticle = document.querySelectorAll(".article-contents a");
let prevScrollpos = window.pageYOffset;


// Functions
const addTargetAttribute = () => {
  for (let i = 0; i < linksInArticle.length; i++) {
    linksInArticle[i].setAttribute("target", "_blank");
    console.log(linksInArticle[0]);
  }
};


// Invoke function
addTargetAttribute();





//const showMenuOnScroll = () => {
//  const windowWidth = window.innerWidth;
//	if (windowWidth >= 768) {
//		return;
//	} 
//  let currentScrollPos = window.pageYOffset;
//  if (prevScrollpos > currentScrollPos) {
//    document.querySelector(".header").style.top = "0";
//  } else {
//    document.querySelector(".header").style.top = "-250px";
//  }
//  prevScrollpos = currentScrollPos;
//}
//
//window.addEventListener("scroll", showMenuOnScroll);