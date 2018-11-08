// Constants
const br = document.querySelectorAll(".related-contents br");
const introInArticle = document.querySelector(".article-contents p");
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


// Invoke function
addTargetAttribute();
removeBr();