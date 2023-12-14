const apiKey = "5y/TFIBy5Y9TvCqrOwW49A==SW85YFhrs6KMYxsC";
const rawCategory = [
  "age",
  "car",
  "courage",
  "dreams",
  "experience",
  "failure",
  "family",
  "fear",
  "forgiveness",
  "friendship",
  "funny",
  "future",
  "happiness",
  "hope",
  "humor",
  "inspirational",
  "knowledge",
  "leadership",
  "life",
  "love",
  "success",
];

const button = document.querySelector("button");
button.addEventListener("click", getQuotes);
const quotes = document.querySelector(".quotes");
const header = document.querySelector("h1");
const author = document.getElementById("author");
const footId1 = document.getElementById("footicon1");
const footId2 = document.getElementById("footicon2");
const quotesMark = document.getElementById("quotes-mark");
const quotesMark2 = document.getElementById("quotes-mark2");
const container = document.querySelector(".container");
window.addEventListener("load", getQuotes);

function getQuotes() {
  randomCat = Math.floor(Math.random() * rawCategory.length);
  category = rawCategory[randomCat];
  const randomColor = chroma.random().hex();

  fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      quotes.textContent = `${result[0].quote}`;
      author.textContent = `---${result[0].author} (${result[0].category})`;
      console.log(result);
    })
    .catch((error) => console.error("Error fetching quotes:", error));
  document.body.style.backgroundColor = randomColor;
  header.style.color = randomColor;
  button.style.backgroundColor = randomColor;
  footId1.style.borderColor = randomColor;
  footId1.style.color = randomColor;
  footId2.style.borderColor = randomColor;
  footId2.style.color = randomColor;
  quotesMark.style.color = randomColor;
  quotesMark2.style.color = randomColor;
}
