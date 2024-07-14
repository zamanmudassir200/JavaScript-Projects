const apiUrl = `https://api.quotable.io/random`;
const quote = document.querySelector("blockquote");
const authorName = document.querySelector("#author-name");
const fetchQuotes = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quote.innerText = data.content;
    authorName.innerText = data.author;
  } catch (error) {
    console.log(error);
  }
};
const tweet = () => {
  window.open(
    `https://twitter.com/intent/tweet?text=` + quote.innerText,
    "Tweet Window",
    "width=600,height=300"
  );
};
fetchQuotes();
