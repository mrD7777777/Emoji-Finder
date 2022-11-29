import { data } from "./emoji.js";
console.log("hi");
const cards = document.querySelector(".cards");
const input = document.querySelector("input");

function createCard(obj) {
  const card = document.createElement("div");
  const emoji = document.createElement("p");
  const title = document.createElement("p");
  const text = document.createElement("p");
  card.className = "card";
  emoji.className = "card_emoji";
  title.className = "card_title";
  text.className = "card_text";

  emoji.textContent = obj.symbol;
  title.textContent = obj.title;
  text.textContent = obj.keywords;

  card.append(emoji);
  card.append(title);
  card.append(text);

  return card;
}

data.forEach((el) => cards.append(createCard(el)));

input.addEventListener("input", showTitle);
function showTitle() {
  let data1 = data.filter(
    (card) =>
      card.title.toLowerCase().includes(input.value.trim().toLowerCase()) ||
      card.keywords.includes(input.value.trim().toLowerCase())
  );
  cards.innerHTML = "";
  data1.forEach((el) => cards.append(createCard(el)));
}
