//Grazia Pestillo © 2019 MIT License
//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototype


let sentiment, sentimentVal, text, prediction;
let say = new p5.Speech();
let recognition =  new p5.SpeechRec('en-EN');
let target_registrazione = document.getElementById('registrazione');
let target_sentimento = document.getElementById('sentimento');


function setup() {
  sentiment = ml5.sentiment('movieReviews', modelReady);
}

function inizializza() {
  say.setRate(0.8);
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onResult = showResult;
  recognition.start();
}

function showResult() {
  target_registrazione.innerHTML=recognition.resultString;
  getSentiment()
}

function getSentiment() {
  prediction = sentiment.predict(recognition.resultString);
  sentimentVal = floor(map(prediction.score, 0, 1, 194, 28));
  target_sentimento.innerHTML=sentimentVal;
  target_registrazione.style['font-variation-settings'] = `"wght" ${sentimentVal}`;
}

function modelReady() {
  target_sentimento.innerHTML="MODEL LOADED";
  say.speak('... ok ...');
  inizializza();
}