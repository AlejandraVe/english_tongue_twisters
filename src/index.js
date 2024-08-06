function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 16,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  let context = `You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem at the end with 'SheCodes AI' inside a <strong> element. Make suer you sign at the end and NOT at the beginning. Just write the poem.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem-element");

 poemElement.classList.remove("hidden");

  let waitParagraph = document.querySelector("#poem");
  waitParagraph.innerHTML = `<div class="blink">⌛ Generating a poem for you... </div>`;
  axios.get(apiURL).then(displayPoem);
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generatePoem);
