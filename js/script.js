import { data } from "./emoji.js";
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
const cards = document.querySelector(".cards");
data.forEach((el) => cards.append(createCard(el)));

// const searchCard = document.querySelector("input").value;
// console.log(searchCard);

const searchCard = (document.querySelector("input").oninput = function () {
  let val = this.value.trim();
  console.log(val);
  return val;
});
// console.log(searchCard);
// function getCard() {
//   return data.forEach((el) => cards.append(createCard(el)));
// }
