# V-Typo. Animate Meanings. Inserti testuali cinematografici Intelligenti.
## Esplorazione tecnologie e prototipi.
###### Il progetto affronta il tema della tipografia nella sottotitolazione cinematografica, proponendo l'uso dei caratteri variabili come strumento espressivo che permetta la comprensione delle immagini con un approccio "for all", con l'intento di rendere i sottotitoli elementi in grado di colmare a trecentosessanta gradi l'eventuale impossibilità di fruire del sonoro. ######

###### *The design theme is typography in the cinematographic subtitling, proposing the use of variable fonts as an expressive tool that allows the understanding of images with a "for all" approach, with the aim of making subtitles elements capable of bridging the eventual impossibility of enjoying the sound*. 
[video prototipi YouTube](https://www.youtube.com/channel/UCkjRX9Fz-Cb1KqOfj2qPm4w/)



## Prima fase di prototipazione: Arduino+sensori+p5.js  ##
 In questo prototipo utilizzo: un sensore ultrasuoni, un joystick ed un potenziometro per controllare gli assi di variaizone del carattere. 
 
 
 [vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/full/kET-pmdYl) 
 
 [vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/Primi%20prototipi_arduino%20e%20sensori)


![anteprima](https://i.imgur.com/Ip5uNQn.gif)


## Seconda fase di prototipazione: Dati microfono ##
 In questo secondo prototipo sfrutto gli input ricevuti dal microfono per controllare due assi di variazione del carattere on base all'intensità del suono rilevato
 
 
 [vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/sketches/M1ov0ly79) 
 
 [vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/Prototipo%20microfono%20e%20VF)


![anteprima](https://i.imgur.com/SvMUIr1.gif)


## Terza fase di prototipazione: prototipi intelligenti ##
#### Prototipi realizzati con algoritmi di Machine Learning in grado di riconoscere i volti e le espressioni su essi. ####
In questo caso utilizzo la libreria ml5.js che permette all'algoritmo di riconoscere il mio volto assegnando agli assi di variazione del carattere delle dimensioni che variano a seconda della mia distanza dallo schermo, quindi alla grandezza del mio volto.
 
 
 [vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/sketches/NXffr_GTc) 
 
 [vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/PrototipiIntelligenti/ml5FaceDetection)


![Imgur](https://i.imgur.com/R3ENZc1.gif)


Ho utilizzato in questo caso un algoritmo di Machine Learning in grado di riconoscere istante per istante le espressioni rilevate dal mio volto, ognuna di esse modifica un asse di variazione del carattere. 
 
 
 [vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/full/G8bj4TYM-) 
 
 [vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/PrototipiIntelligenti/SentimentAnalysis)


![Imgur](https://i.imgur.com/k4GlMlU.gif)


# Progetto
#### I Prototipi sfruttano algoritmi di Speech recognition e Sentimen Analysis rispettivamente in grado di rilevare la frase pronunciata e l'umore di quest'ultima, modificando in base ad essa un asse di variazione del carattere. ####


In questo primo prototipo il rilevamento di una frase positiva equivale ad un carattere light, di una negativa invece Bold.


[vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/sketches/LE0oLOwA)

[vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/prototipi%20progetto/speech%2Bsentiment%20testo)


![Imgur](https://i.imgur.com/ENS8n2e.gif)


L'ultimo passo è stato quello applicare le sperimentazioni effettuate ad un contesto reale: un video già presente su YouTube la cui sottotitolazione viene generata sfruttando gli algoritmi già sperimentati nei prototipi. 

[vai al progetto p5.js editor](https://editor.p5js.org/gr.ace/sketches/TctDw6hSr)

[vai a sorgente progetto](https://github.com/gr-ace-p/v-typo/tree/master/prototipi%20progetto/speech%2B%20sentiment%20video%20e%20testo/funzionante)


![anteprima](https://i.imgur.com/tDA2Q2T.gif)
