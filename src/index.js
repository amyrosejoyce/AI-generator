function displayFact(response) {
  console.log("fact generated");
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function showFact(event) {
  event.preventDefault();
  let userInputElement = document.querySelector("#fact-input");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Your are a smart AI Assistant that tells interesting facts. The fact must be provided in HTML format. Example: <p>this is a fact</p> Make sure to follow the user instructions. Do not include a title to the fact. Sign the fact with 'SheCodes AI' inside a <strong> element at the end of the fact and NOT at the beginning";
  let prompt = `User Instructions: Generate a short and interesting fact about ${userInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="blink">Generating a fact for you about ${userInputElement.value} 🤖</div>`;

  console.log("generating fact");
  console.log("prompt");
  console.log("context");
  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", showFact);
