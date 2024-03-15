// Array of random words
var words = ["Baryon Mode","Six path Sage mode","Tailed Beast Transformation","Sage Mode","Rasengan","Shadow Clone Jutsu"];

function generateRandomWord() {
  // Generate a random index to select a word from the array
  var randomIndex = Math.floor(Math.random() * words.length);

  // Get the random word from the array
  var randomWord = words[randomIndex];

  // Display the random word on the webpage
  document.getElementById("result").innerHTML = randomWord;
}