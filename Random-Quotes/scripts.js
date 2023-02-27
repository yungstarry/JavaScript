function generate() {
    const quotes = {
  "Mahatma Gandhi": "Be the change that you wish to see in the world.",
  "Robert Frost": "In three words I can sum up everything I've learned about life: it goes on.",
  "William Shakespeare": "It is not in the stars to hold our destiny but in ourselves.",
  "Mae West": "You only live once, but if you do it right, once is enough.",
  "Steve Jobs": "The only way to do great work is to love what you do.",
  "Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Ralph Waldo Emerson": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Thomas A. Edison": "I have not failed. I've just found 10,000 ways that won't work.",
  "Theodore Roosevelt": "Believe you can and you're halfway there.",
  "Albert Einstein": "I have no special talents. I am only passionately curious.",
  "Eleanor Roosevelt": "The future belongs to those who believe in the beauty of their dreams.",
  "Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "African Proverb": "If you want to go fast, go alone. If you want to go far, go together.",
  "Roy T. Bennett": "Don't wait for opportunities, create them.",
  "John Holt": "The true test of character is not how much we know how to do, but how we behave when we don't know what to do.",
  "Dalai Lama XIV": "Happiness is not something ready-made. It comes from your own actions.",
  "Walt Disney": "All our dreams can come true, if we have the courage to pursue them.",
  "Edmund Burke": "The only thing necessary for the triumph of evil is for good men to do nothing.",
  "Nelson Mandela": "Education is the most powerful weapon which you can use to change the world.",
  "Charles R. Swindoll": "Life is 10% what happens to you and 90% how you react to it."
};

let authors = Object.keys(quotes)
let randomIndex = Math.floor(Math.random() * authors.length);



// Get random quote and author
  
  let author = authors[randomIndex];
  let quote = quotes[author];

  // Display quote and author in HTML elements
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = "- " + author;
}