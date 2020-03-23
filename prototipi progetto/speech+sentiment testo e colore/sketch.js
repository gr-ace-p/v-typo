//Grazia Pestillo © 2019 MIT License
//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototypelet faceapi;

var miaRegistrazionetext;
let lingua = navigator.language;
let lang = 'en-EN';
let sentiment;
let sentimentResult;
var val;
var avvioRec = new p5.Speech();
let onEnd;
var firstRun = true;
let submitBtn;
let statusEl;



var target = document.getElementById('registrazione');
var target2 = document.getElementById('sentimento');



function setup() {
  createCanvas(650, 500);


  inizializza();
  paragraph = createP(miaRegistrazionetext = "");
  sentimentResult = createP("sentiment score:");
  sentiment = ml5.sentiment('movieReviews', modelReady);
}

function inizializza() {
  //creo nuova registrazione
  avvioRec = new p5.SpeechRec(lang);
  //registrazione continua
  avvioRec.continuous = true;
  //risltati parziali
  avvioRec.interimResults = false;
  //mostra il risultato
  avvioRec.onResult = showResult;
  console.log(avvioRec);
  avvioRec.start();
}


function showResult() {
  //console.log(avvioRec.resultString);
  miaRegistrazionetext = avvioRec.resultString;
  // miaRegistrazionetext += "";
  $("#registrazione").html("<br> &emsp;");
  $("#registrazione").append(avvioRec.resultString);

  getSentiment()


}

function getSentiment() {

  const text = paragraph.value(miaRegistrazionetext);
  // make the prediction
  const prediction = sentiment.predict(miaRegistrazionetext);
  $("#sentimento").html("<br> &emsp;");
  $("#sentimento").append(prediction.score);



  val = floor(map(prediction.score, 0, 1, 194, 28));
  sentimentResult = createP(prediction.score);
  val0 = 0;
  val1 = 60;
  val2 = floor(map(prediction.score, 0, 1, 100, 255));
  console.log(prediction.score);
  
  

  
  c= color(val0, val1+1, val2+2);
  c2= color(val0*3, val1*3, val2*3);
  firstRun = false;



  changeFont();



}

function changeFont() {


  //console.log(val);
  target.style['font-variation-settings'] = `"wght" ${val}`;
  target2.style['font-variation-settings'] = `"wght" ${val}`;
}

function draw() {
  
if (firstRun){//initially display neutral background
  
    
  
  $("#registrazione").css("background-color","white");
  $("#container").css("background-color","white");
  $("#container").css("border-width","0px");
  $("#container").css("border-color","black");
  
    //background(234, 208, 180);
  } else{
    
   
    $("#registrazione").css("color",c2);
    $("#registrazione").css("background-color",c);
    $("#sentimento").css("color",c2);
    $("#sentimento").css("background-color",c);
    $("#container").css("background-color",c);
    $("#container").css("border-width","6px");
    $("#container").css("border-color",c2);
  }
}


function modelReady() {
  console.log('model loaded');

}