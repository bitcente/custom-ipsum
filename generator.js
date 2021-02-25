// crear loremIpsum que invoque la función GenerateNewText
const loremIpsum = new GenerateNewText();

// Crear un objeto con todas las frases
function GenerateNewText() {
  // Frases para el ipsum
  this.sentences =
    [
      "estamos en el mundo de los objetos",
      "estamos en segundo, señores",
      "hairen",
      "layút",
      "magia",
      "pi ich pi",
      "idi",
      "any diude?",
      "brait",
      "samit",
      "fúrbol",
      "pipol in mit",
      "urrel",
      "achetemeel",
      "cierra la puerta Pedro",
      "aceptamos pulpo como animal de compañía",
      "bueno, ya lo vemos después de clase",
      "jav yu did de exersais",
      "dar cera, pulir cera",
      "carai",
      "lo vi, lo hice y lo entendí",
      "esto no sirve pa na pero yo os lo enseño",
      "olvidad todo lo que os he dicho",
      "la mierda esta",
      "bueno, esto esta mal, pasamos a otra cosa",
      "no funciona pero debería funcionar",
      "toros",
      "los del internet",
      "HP",
      "void",
      "si yo te pago 600 euros me lo haces?",
      "Jesuscristo inventó el codigo postal",
      "¿Hay alguien ahí?",
      "¿Pero hay alguien más?",
      "trabajador de HP",
      "la culpa es de Juanjo",
      "mañana os lo traigo hecho",
      "crucemos los dedos",
      "¿Tú quién eres?",
      "habemus papam",
      "esto es magia de Hogwarts, señores",
      "Pablo, vas sin casco",
      "apeich",
      "Nicolás",
      "mi mujer me dice lo mismo... mis amantes tambien",
      "un trabajo de negros",
      "dejádme solo",
      "te falta colar gol",
      "pues no sé por qué no va",
      "symfony",
      "este está a pescozón",
      "voy a dibujarlo para que lo entendáis mejor",
      "wat japen"
   ];
}

// Generar una frase aleatoria
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Generar párrafos
GenerateNewText.prototype.getParagraph = function() {
  let parrafo = "";
  // Mínimo de carácteres por párrafo
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

// Método que genera múltiples párrafos
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generar el número de párrafos especificado por el usuario
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convertir el array en cadena HTML
  let parrafoHTML = "";
  allParagraphs.forEach(function (parrafo) {
    parrafoHTML += "<p class='parrafo'>" + parrafo + ".</p><hr>";
  });
  return parrafoHTML;
}

module.exports = loremIpsum;
