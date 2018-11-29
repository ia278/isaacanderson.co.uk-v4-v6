// Constants
const articleTOC = document.querySelector(".article-toc");
const br = document.querySelectorAll(".related-contents br");
const h2InArticle = document.querySelectorAll(".article h2");
const linksInArticle = document.querySelectorAll(".article-contents a");
//const title = document.querySelector("h1");
//console.log(title);


// Functions


const addTargetAttribute = () => {
	for (let i = 0; i < linksInArticle.length; i++) {
		linksInArticle[i].setAttribute("target", "_blank");
	}
};
const createHeaderList = () => {
	const ol = document.createElement("OL");
	for (let i = 0; i < h2InArticle.length; i++) {
		// Create ID, add to headers in article
		const idText = h2InArticle[i].innerHTML.split(" ").join("-");
		const id = idText.toLowerCase();
		h2InArticle[i].setAttribute("id", id);
		
		// Create a link, set href as ID, create list item from this link
		const a = document.createElement("A");
		a.innerHTML = h2InArticle[i].innerHTML;
		a.setAttribute("href", `#${id}`);
		const li = document.createElement("LI");
		li.appendChild(a);
		ol.appendChild(li);
	}
	const div = document.createElement("DIV");
	div.appendChild(ol);
	articleTOC.appendChild(div);
};


const removeBr = () => {
	for (let i = 0; i < br.length; i++) {
		br[i].parentNode.removeChild(br[i]);
	}
};

// Invoke functions
addTargetAttribute();
createHeaderList();
removeBr();


// If number of h2s is one, dont run the script, as it's probably the "about page"