let texts = document.querySelector("#texts");
let previous = document.querySelector("#previous-button");
let next = document.querySelector("#next-button");
let wordContainer = document.querySelector("#word-container");
let count = document.querySelector("#count");
let start = document.querySelector(".start")
let mainContainer = document.querySelector("#main-container") 
let firstContainer = document.querySelector("#first-container")

start.addEventListener("click", () =>{
  mainContainer.style.display = "block";
  firstContainer.style.display = "none";
  console.log("start is active")
})

let i = 1;
fetch("words.json")
  .then((response) => response.json())
  .then(
    (data) =>
      next.addEventListener("click", () => {
        i++;
        if (i > 9800) i = 0;
        texts.innerHTML = data[i];
        count.innerHTML = i;
      }) +
      previous.addEventListener("click", () => {
        i--;
        if (i < 0) i = 0;
        texts.innerHTML = data[i];
        count.innerHTML = i;
      })
  );

let readText = new SpeechSynthesisUtterance();
wordContainer.addEventListener("click", function (e) {
  readText.text = e.target.innerHTML;
  window.speechSynthesis.speak(readText);
  console.log(readText.text);
});
