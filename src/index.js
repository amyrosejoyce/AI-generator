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

let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
let context =
  "Your are a smart AI Assistant that tells interesting facts. The fact must be provided in HTML format. Example: <p>this is a fact</p>";
let prompt = "Generate a short and interesting fact about dinosaurs. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("prompt");
