function showFact(event) {
  event.preventDefault();

  new Typewriter("#fact", {
    strings: "generating fact",
    autoStart: true,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", showFact);
