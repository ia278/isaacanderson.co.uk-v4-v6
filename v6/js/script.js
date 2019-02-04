// Constants
const archiveCard = document.querySelectorAll(".archive-listing .archive-card");
const articleNav = document.querySelector(".article-nav");
const br = document.querySelectorAll(".related-contents br");
const h2InArticle = document.querySelectorAll(".article-contents h2");
const landingCard = document.querySelectorAll(".landing-listing .posts-card");
const linksInArticle = document.querySelectorAll(".article-contents a");
const postsCard = document.querySelectorAll(".posts-listing .posts-card");


// Functions
const addArchiveAlignmentCard = () => {
	if (archiveCard.length === 0) {
		return;
	}
	// Attach first alignment div
	const div = document.createElement("DIV");
	div.setAttribute("class", `archive-card archive-card-align`);
	const lastCard = archiveCard[archiveCard.length - 1];
	lastCard.parentNode.insertBefore(div, lastCard.nextSibling);
};
const addLandingAlignmentCard = () => {
	if (landingCard.length === 0) {
		return;
	}
	// Attach first alignment div
	const div = document.createElement("DIV");
	div.setAttribute("class", `posts-card posts-card-align`);
	const lastCard = landingCard[landingCard.length - 1];
	lastCard.parentNode.insertBefore(div, lastCard.nextSibling);
	
	// Attach second alignment div
	const div2 = document.createElement("DIV");
	div2.setAttribute("class", `posts-card posts-card-align`);
	const updatedLandingCard = document.querySelectorAll(".landing-listing .posts-card");
	const updatedLastCard = updatedLandingCard[updatedLandingCard.length - 1];
	updatedLastCard.parentNode.insertBefore(div2, updatedLastCard.nextSibling);
};
const addPostAlignmentCard = () => {
	if (postsCard.length === 0) {
		return;
	}
	// Attach first alignment div
	const div = document.createElement("DIV");
	div.setAttribute("class", `posts-card posts-card-align`);
	const lastCard = postsCard[postsCard.length - 1];
	lastCard.parentNode.insertBefore(div, lastCard.nextSibling);
	
	// Attach second alignment div
	const div2 = document.createElement("DIV");
	div2.setAttribute("class", `posts-card posts-card-align`);
	const updatedPostsCard = document.querySelectorAll(".posts-listing .posts-card");
	const updatedLastCard = updatedPostsCard[updatedPostsCard.length - 1];
	updatedLastCard.parentNode.insertBefore(div2, updatedLastCard.nextSibling);
};
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
addArchiveAlignmentCard();
addLandingAlignmentCard();
addPostAlignmentCard();
addTargetAttribute();
createHeaderList();
removeBr();