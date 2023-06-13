const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");
const accessKey = "JUaQTEamsQjz6VwG6C4pTZ4WWY4EOx6YPJeN80dY5Ug";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per _page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  results.forEach((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.appendChild(image);
    imageLink.target="_blank";
    
    searchresult.appendChild(imageLink);
  });
  showmorebtn.style.display="block";
}

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showmorebtn.addEventListener("click",()=>{
  page++;
  searchImages();
})