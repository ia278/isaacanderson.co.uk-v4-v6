// Constants
const br = document.querySelectorAll(".related-contents br");
const h2InArticle = document.querySelectorAll(".article h2");
const linksInArticle = document.querySelectorAll(".article-contents a");


// Functions
const addTargetAttribute = () => {
	for (let i = 0; i < linksInArticle.length; i++) {
		linksInArticle[i].setAttribute("target", "_blank");
	}
};

const removeBr = () => {
	for (let i = 0; i < br.length; i++) {
		br[i].parentNode.removeChild(br[i]);
	}
};

const createHeaderList = () => {
	const ol = document.createElement("OL");
	for (let i = 0; i < h2InArticle.length; i++) {
		// Create ID, add to headers in article
		const id = `10${i}`;
		h2InArticle[i].setAttribute("id", id);
		
		// Create a link, set href as ID, create list item from link
		const a = document.createElement("A");
		a.innerHTML = h2InArticle[i].innerHTML;
		a.setAttribute("href", `#${id}`);
		const li = document.createElement("LI");
		li.appendChild(a);
		ol.appendChild(li);
	}
	console.log(ol);
};


// Invoke function
addTargetAttribute();
createHeaderList();
removeBr();