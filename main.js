let texts = document.querySelector("#texts");
let previous = document.querySelector("#previous-button");
let next = document.querySelector("#next-button");

let i = 0;
fetch("words.json")
  .then((response) => response.json())
  .then((data) =>
    next.addEventListener("click", () => {
      i++;
      if (i > 9800) i = 0;
      texts.innerHTML = data[i];
    }) +
    previous.addEventListener("click", () => {
      i--;
      if (i < 0) i = 9800;
      texts.innerHTML = data[i];
    })
);
