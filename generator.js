const loremIpsum = new GenerateNewText();

function GenerateNewText() {
  // All ipsum sentences that will be randomly displayed
  this.sentences =
    [
      "lorem ipsum",
      "dolor sit amet",
      "consectetur",
      "adipiscing elit",
      "sed do eiusmod",
      "tempor incididunt",
      "ut labore et dolore",
      "magna aliqua",
   ];
}

// Generate a random sentece from this.senteces array
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Generate Paragraphs
GenerateNewText.prototype.getParagraph = function() {
  let parrafo = "";
  // Paragraph minimum characters here
  let minimumCharacterLength = 600;
  let primeraFrase = true;
  while (parrafo.length < minimumCharacterLength) {
    if (primeraFrase) {
      parrafo = parrafo.concat(this.getRandomSentence());
      primeraFrase = false;
    } else {
      parrafo = parrafo.concat(" " + this.getRandomSentence());
    }
  }
  return parrafo;
}

// Generates multiple paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generates the number of paragraphs specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Array to HTML string
  let parrafoHTML = "";
  allParagraphs.forEach(function (parrafo) {
    parrafoHTML += "<p class='parrafo'>" + parrafo + ".</p><hr>";
  });
  return parrafoHTML;
}

module.exports = loremIpsum;
