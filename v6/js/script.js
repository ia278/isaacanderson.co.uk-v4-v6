// Constants
const articleNav = document.querySelector(".article-nav");
const br = document.querySelectorAll(".related-contents br");
const h2InArticle = document.querySelectorAll(".article h2");
const linksInArticle = document.querySelectorAll(".article-contents a");


// Functions
const addTargetAttribute = () => {
	if (linksInArticle.length === 0) {
		return;
	}
	for (let i = 0; i < linksInArticle.length; i++) {
		linksInArticle[i].setAttribute("target", "_blank");
	}
};
const createHeaderList = () => {
	if (h2InArticle.length === 0) {
		return;
	}
	const ol = document.createElement("OL");
	for (let i = 0; i < h2InArticle.length; i++) {
		// Create ID, add to headers in article
//		const idText = h2InArticle[i].innerHTML.split(" ").join("-");
//		const id = idText.toLowerCase();
		const id = `ia${i}`;
		h2InArticle[i].setAttribute("id", id);
		
		// Create a link, set href as ID, create ol from links
		const a = document.createElement("A");
		a.innerHTML = h2InArticle[i].innerHTML;
		a.setAttribute("href", `#${id}`);
		const li = document.createElement("LI");
		li.appendChild(a);
		ol.appendChild(li);
	}
	
	// Create div, place ol in div
	const div = document.createElement("DIV");
	div.appendChild(ol);
	articleNav.appendChild(div);
};
const removeBr = () => {
	if (br.length === 0) {
		return;
	}
	for (let i = 0; i < br.length; i++) {
		br[i].parentNode.removeChild(br[i]);
	}
};

// Invoke functions
addTargetAttribute();
createHeaderList();
removeBr();