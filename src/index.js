function showFact(event) {
  event.preventDefault();
  let factElement = document.querySelector("#search-output");
  console.log("button clicked!");
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", showFact);
