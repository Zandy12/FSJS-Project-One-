/* ======================================

        Treehouse Unit 1 Project: 
          Random Quote Generator 
        
        submission by Zane Chandy   

======================================= */


// Create an array of objects containing 2-4 properties for each quote 
var quotes = [
  { 
    tags: 'proverb',
    quote: 'The best things in life are free. The second best are very expensive.',
    person: 'Coco Chanel',
    citation: null,
    year: null
  },
  { 
    tags: 'politics',
    quote: 'Now we are engaged in a great civil war, testing whether our nation, or any nation so conceived and so dedicated, can long endure.',
    person: 'Abraham Lincoln',
    citation: 'Gettysburg Address',
    year: '1863'
  },
  { 
    tags: 'entertainment',
    quote: 'To boldy go where no man has gone before.',
    person: 'Captain Kirk',
    citation: 'Star Trek: The Original Series',
    year: null
  },
  { 
    tags: 'humor',
    quote: 'I am the president, you can\'t grab me like that!',
    person: 'Saddam Hussein',
    citation: null,
    year: null
  },
  { 
    tags: 'proverb',
    quote: 'Faith can move mountains.',
    person: 'Jesus Christ',
    citation: 'Matthew 17:20',
    year: null
  }
]

// Function to create a random number between 0-4 (changed from 1-5 to match corresponding array indexes)
function getRandomQuote() {
  return Math.floor(Math.random() * 5);
}

// Function to inject HTML corresponding to Id and Class markups in index.html
function printQuote() {
  var random = getRandomQuote();
  var printToScreen = '';
  // Add a tags property (extra credit) 
  printToScreen += '<h2 class="tags"> - ' + quotes[random].tags + '</h2>';
  printToScreen += '<p class="quote">' + quotes[random].quote + '</p>';
  printToScreen += '<p class="source"> ' + quotes[random].person;
  if (quotes[random].citation != null) {
    printToScreen += '<span class="citation">' + quotes[random].citation + '</span>';
  }
  if (quotes[random].year != null) {
    printToScreen += '<span class="year">' + quotes[random].year + '</span></p>';
  }
  document.getElementById('quote-box').innerHTML = printToScreen; 
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);