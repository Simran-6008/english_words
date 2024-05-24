let texts = document.querySelector("#texts");
let previous = document.querySelector("#previous-button");
let next = document.querySelector("#next-button");
let wordContainer = document.querySelector("#word-container");
let count = document.querySelector("#count");
let start = document.querySelector(".pushable")
let mainContainer = document.querySelector("#main-container")
let firstContainer = document.querySelector("#first-container")
let gallery = document.querySelector(".gallery")
let front = document.querySelector(".front")
let startText = document.querySelector("#start-button")
let numberInput = document.querySelector("input")
let goBUtton = document.querySelector(".go-button")
let inputContainer = document.querySelector("#input-container")



let synth = window.speechSynthesis;
let voices = [];

PopulateVoices();

if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}


let i = 0;
fetch("words.json")
  .then((response) => response.json())
  .then(
    (data) =>
      next.addEventListener("click", () => {
        i++;
        if (i > 9800) i = 0;
        texts.innerHTML = data[i];
        count.innerHTML = "Word No." + " " + i;
        previous.style.display = "block";
        startText.innerHTML = "Next";
        inputContainer.style.display = "block"

      }) +
      previous.addEventListener("click", () => {
        i--;
        if (i < 1) i = 1;
        texts.innerHTML = data[i];
        count.innerHTML = "Word No." + " " + i;
      }) +
      goBUtton.addEventListener("click", () => {
        count.innerHTML = "Word No." + " " + numberInput.value
        texts.innerHTML = data[numberInput.value]
         i = numberInput.value
         numberInput.value = ""
      })
  );


texts.addEventListener("click", function (e) {
  let toSpeak = new SpeechSynthesisUtterance(e.target.textContent);
  toSpeak.voice = voices[7];
  toSpeak.rate = 0.7;
  synth.speak(toSpeak);
});


function PopulateVoices() {
  voices = synth.getVoices();
}