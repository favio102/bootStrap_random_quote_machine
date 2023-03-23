import QUOTEBANK from './quoteBank.js'; 

const text = document.getElementById("text");
const author = document.getElementById("author");
const randomBtn = document.getElementById("new-quote");


//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = QUOTEBANK[currentItem];
    text.textContent = item.quote;
    author.textContent = item.author;
});

// show random person
randomBtn.addEventListener('click', function () {
    // generate random quote and author
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTEBANK[randomIndex];
    // tweet link    
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
    // add Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat + "%22";
    // add Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat;

    document.getElementById("tweet-quote").href = twitterLink;
    text.innerText = randomQuoteData.quote;
    author.innerText = randomQuoteData.author;
 
});
