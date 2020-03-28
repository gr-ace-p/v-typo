//Grazia Pestillo © 2019 MIT License
// by @fupete test for grace master thesis.

//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototypelet faceapi;  

  let sentiment, sentimentVal, text, prediction;
  let target_registrazione = document.getElementById('registrazione');
  let target_sentimento = document.getElementById('sentimento');

  // Creo array stringhe di testo
  let testo = ["Bad...",
               "Try...",
               "Good...",
               "Start...",
               "In the great 1980s movie \"The Blues Brothers,\" there's a scene where John Belushi goes to visit Dan Aykroyd in his apartment in Chicago for the very first time.",
               "It's a cramped, tiny space and it's just three feet away from the train tracks. As John sits on Dan's bed, a train goes rushing by, rattling everything in the room.",
               "John asks, \"How often does that train go by?\" Dan replies, \"So often, you won't even notice it.\" And then, something falls off the wall.",
               "We all know what he's talking about. As human beings, we get used to everyday things really fast.",
               "As a product designer, it's my job to see those everyday things, to feel them, and try to improve upon them. ",
               "For example, see this piece of fruit? See this little sticker? That sticker wasn't there when I was a kid.",
               "But somewhere as the years passed, someone had the bright idea to put that sticker on the fruit. Why?",
               "So it could be easier for us  to check out at the grocery counter. "
  ];
  // Creo array durate
  let durata = [3000,
                3000,
                3000,
                3000,
                11000,
                12000,
                12000,
                6000,
                8000,
                11000,
                8000,
                6000
  ];

  let contami = 0;


  function setup() {
    sentiment = ml5.sentiment('movieReviews', modelReady);
  }

  /* function inizializza() {
  say.setRate(1);
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onResult = showResult;
  recognition.start();
  }   */

  function inizializza() {
    target_registrazione.innerHTML = testo[contami];
    
    if (contami < testo.length) {
        getSentiment();
      contami++;
    } else {
      target_registrazione.innerHTML = "";
    }


  }

  function getSentiment() {
    prediction = sentiment.predict(testo[contami]);
    sentimentVal = floor(map(prediction.score, 0, 1, 194, 28));
    target_sentimento.innerHTML = prediction.score.toFixed(3);
    target_registrazione.style['font-variation-settings'] = `"wght" ${sentimentVal}`;
    setTimeout(inizializza, durata[contami]);
  }

  function modelReady() {
    target_sentimento.innerHTML = "MODEL LOADED";
  }