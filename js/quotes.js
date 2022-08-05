const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "- Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "- John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "- Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "- Helen Keller",
    },
    {
      quote: "To Travel is to Live.",
      author: "- Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "- Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "- Mae West",
    },
    {
      quote: "Never go on trips with anyone you do not love.",
      author: "- Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "- Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "- Sheda Savage",
    },
    
    {quote:"The future belongs to those who believe in the beauty of their dreams.",
    author:"- Benjamin Franklin"},
    {quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author:"- Mother Teresa"},
    {quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author:"- Robert Louis Stevenson"},
    {quote:"It is during our darkest moments that we must focus to see the light",
    author:"- Aristiotle"},
    {quote:"Life is either a daring adventure or nothing at all.",
    author:"- Helen Keller"},
    {quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author:"- Oscar Wilde"},
    {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author:"- Nelson Mandela"},
    {quote:"Keep smiling, because life is beatiful thing and there's so much to smile about.",
    author:"- Marilyn Monroe"},
    {quote:"Life is made of ever so many partings welded together.",
    author:"- Charles Dickens"},
    {quote:"Shut up",
    author:"- 세영"},
    {quote:"졸지마라",
    author:"- 세영"},









  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  


  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
  