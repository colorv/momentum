const quotes = [
  {
    quote: "Where there is a will there is a way.",
    author: "Angela Merkel",
  },
  {
    quote:
      "success is walking from failure to failure with no loss of enthusiasm",
    author: "Winston Churchill",
  },
  {
    quote: "All progress takes place outside the comfort zone",
    author: "Michael john Bobak",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "i was never less alone than when by myself.",
    author: "Edward Gibbon",
  },
  {
    quote:
      "Success seems to be connected with action. Successful people kepp moving.",
    author: "Friedrich von schiller",
  },
  {
    quote: "Only i can change my life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "It is not length of life, But depth of life.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "I find the harder I work, the more luck I have.",
    author: "Thomas jefferson",
  },
  {
    quote: "United we stand, divided we fail.",
    author: "John Dickinson",
  },
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
