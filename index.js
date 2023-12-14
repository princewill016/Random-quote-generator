const apiKey = "5y/TFIBy5Y9TvCqrOwW49A==SW85YFhrs6KMYxsC";
const rawCategory = [
  "age",
  "art",
  "birthday",
  "car",
  "courage",
  "death",
  "dreams",
  "experience",
  "failure",
  "faith",
  "family",
  "fear",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "happiness",
  "hope",
  "humor",
  "inspirational",
  "knowledge",
  "leadership",
  "learning",
  "life",
  "love",
  "success",
];

const button = document.querySelector("button");
button.addEventListener("click", getQuotes);
const quotes = document.querySelector(".quotes");
const author = document.getElementById("author");

setTimeout(() => {
  window.addEventListener("load", getQuotes), 6000;
});

function getQuotes() {
  randomCat = Math.floor(Math.random() * rawCategory.length);
  category = rawCategory[randomCat];

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
      author.textContent = `${result[0].author} (${result[0].category})`;
      console.log(result);
    });
}
