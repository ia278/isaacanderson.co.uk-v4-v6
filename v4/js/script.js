let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const windowWidth = window.innerWidth;
	if (windowWidth >= 768) {
		return;
	} 
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}