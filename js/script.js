const btn_submit = document.querySelector("button");
const rates = document.querySelectorAll("li");
const score = document.querySelector("#score");
const main_card = document.querySelector("#main");
const result_card = document.querySelector("#result");

btn_submit.addEventListener("click", (e) => {
  main_card.classList.toggle("disabled");
  result_card.classList.toggle("disabled");
});

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    let selectedItem = e.target.parentElement.querySelector(".selected");
    if (selectedItem) selectedItem.classList.toggle("selected");
    e.target.classList.toggle("selected");
    score.innerText = e.target.innerText;
  });
});
