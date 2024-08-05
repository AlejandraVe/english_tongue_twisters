function generateTongueTwister(event) {
  event.preventDefault();

  new Typewriter("#tongue-twister", {
    strings: "hola hola caracola",
    autoStart: true,
    delay: 16,
    cursor: "",
  });
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generateTongueTwister);
