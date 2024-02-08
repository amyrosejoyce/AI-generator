function showFact(event) {
  alert("hello");
}

let searchField = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", showFact);
