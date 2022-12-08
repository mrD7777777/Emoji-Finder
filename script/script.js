// import { data } from "./emoji.js";

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
let data = await amojiHandler();

async function amojiHandler() {
  let response = await fetch("https://emoji.ymatuhin.workers.dev/");
  let data = await response.json();
  return data;
}
amojiHandler();

const newData = sort(data);
function sort(arr) {
  return arr.map((emoji) => ({
    ...emoji,
    keywords: [...new Set(emoji.keywords.split(" "))].join(" "),
  }));
}

function addData(arr) {
  arr.forEach((el) => cards.append(createCard(el)));
}
addData(newData);

function searchEmoji() {
  let data1 = data.filter(
    (card) =>
      card.title.toLowerCase().includes(input.value.trim().toLowerCase()) ||
      card.keywords.includes(input.value.trim().toLowerCase())
  );
  cards.innerHTML = "";
  addData(data1);
}

input.addEventListener("input", searchEmoji);
