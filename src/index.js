function displayTongueTwister(response) {
  new Typewriter("#tongue-twister", {
    strings: response.data.answer,
    autoStart: true,
    delay: 16,
    cursor: "",
  });
}

function generateTongueTwister(event) {
  event.preventDefault();
  let tongueTwisterInput = document.querySelector("#user-topic");
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let prompt = `Tell me a tongue twister`;
  let context = `Give a short and precise answer please. Just write the tongue twister.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitParagraph = document.querySelector("#tongue-twister");
  waitParagraph.innerHTML = "Generating a tongue twister for you...";
  axios.get(apiURL).then(displayTongueTwister);
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generateTongueTwister);
