/*----------------------------------------

    Assignment 009: Quotes app
    
    JS INDEX
    ===================
    00. Pseudo code
    01. Variables
    02. Generate New Index
    03. Add events listeners
    04. 

----------------------------------------*/

/*----------------------------------------
  00. Pseudo code
----------------------------------------*/

/*
User press on "New Quote" button
A random index is generated (0:list.length) to choose a quote from the list
add the quote and its author to their corresponding html elements
*/

/*----------------------------------------
  01. Variables
----------------------------------------*/
let newQuoteButton = document.getElementById("newQuoteButton");
let quoteParagraph = document.getElementById("quoteParagraph");
let authorParagraph = document.getElementById("authorParagraph");

// The quote list is a list of quote obj where each obj has its own text and author
let quotesList = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },

  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },

  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },

  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },

  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },

  {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },

  {
    text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
  },

  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },

  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },

  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

/*----------------------------------------
  02. Generate New Index
----------------------------------------*/

let newQuoteIndex;
let lastQuoteIndex = -1;

function generateNewIndex() {
  do {
    newQuoteIndex = Math.floor(Math.random() * quotesList.length);
  } while (newQuoteIndex === lastQuoteIndex);
  lastQuoteIndex = newQuoteIndex;
  return newQuoteIndex;
}

/*----------------------------------------
  03. Add events listeners
----------------------------------------*/

newQuoteButton.addEventListener("click", () => {
  const newIndex = generateNewIndex();
  quoteParagraph.innerHTML = `"${quotesList[newIndex].text}"`;
  authorParagraph.innerHTML = `--${quotesList[newIndex].author}`;
});
