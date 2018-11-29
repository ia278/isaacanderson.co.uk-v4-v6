"use strict";

// Constants
var articleTOC = document.querySelector(".article-toc");
var br = document.querySelectorAll(".related-contents br");
var h2InArticle = document.querySelectorAll(".article h2");
var linksInArticle = document.querySelectorAll(".article-contents a");

// Functions


var addTargetAttribute = function addTargetAttribute() {
	for (var i = 0; i < linksInArticle.length; i++) {
		linksInArticle[i].setAttribute("target", "_blank");
	}
};
var createHeaderList = function createHeaderList() {
	var ol = document.createElement("OL");
	for (var i = 0; i < h2InArticle.length; i++) {
		// Create ID, add to headers in article
		var idText = h2InArticle[i].innerHTML.split(" ").join("-");
		var id = idText.toLowerCase();
		h2InArticle[i].setAttribute("id", id);

		// Create a link, set href as ID, create ol from links
		var a = document.createElement("A");
		a.innerHTML = h2InArticle[i].innerHTML;
		a.setAttribute("href", "#" + id);
		var li = document.createElement("LI");
		li.appendChild(a);
		ol.appendChild(li);
	}

	// Create div, place ol in div
	var div = document.createElement("DIV");
	div.appendChild(ol);
	articleTOC.appendChild(div);
};

var removeBr = function removeBr() {
	for (var i = 0; i < br.length; i++) {
		br[i].parentNode.removeChild(br[i]);
	}
};

// Invoke functions
addTargetAttribute();
createHeaderList();
removeBr();