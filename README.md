# V-Typo. Animate Meanings
###### Il progetto affronta il tema della tipografia nella sottotitolazione cinematografica, proponendo l'uso dei caratteri variabili come strumento espressivo che permetta la comprensione delle immagini con un approccio "for all", con l'intento di rendere i sottotitoli elementi in grado di colmare a trecentosessanta gradi l'eventuale impossibilità di fruire del sonoro. ######

###### *The design theme is typography in the cinematographic subtitling, proposing the use of variable characters as an expressive tool that allows the understanding of images with a "for all" approach, with the aim of making subtitles elements capable of bridging three hundred and sixty the eventual impossibility of enjoying the sound*. 



## Prima fase di prototipazione: Arduino+sensori+p5.js  ##
 In questo prototipo utilizzo: un sensore ultrasuoni, un joystick ed un potenziometro per controllare gli assi di variaizone del carattere. 
 
 
 [vai al progetto](https://editor.p5js.org/gr.ace/full/kET-pmdYl) 


![anteprima](https://imgur.com/ljHEUlN.gif)


## Seconda fase di prototipazione: Dati microfono ##
 In questo secondo prototipo sfrutto gli input ricevuti dal microfono per controllare due assi di variazione del carattere on base all'intensità del suono rilevato
 
 
 [vai al progetto](https://editor.p5js.org/gr.ace/full/M1ov0ly79) 


![anteprima](https://i.imgur.com/IQHQlBn.gif)


## Terza fase di prototipazione: prototipi intelligenti ##
#### Prototipi realizzati con algoritmi di Machine Learning in grado di riconoscere i volti e le espressioni su essi. ####
 In questo caso utilizzo la libreria ml5.js per permettere all'algoritmo di riconoscere il mio volto assegnando agli assi di variazione del carattere delle dimensioni che variano a seconda della mia distanza dallo schermo, quindi alla grandezza del mio volto.
 
 
 [vai al progetto](https://editor.p5js.org/gr.ace/full/-YJZEA8sf) 


![Imgur](https://imgur.com/qSCBBfM.gif)



 Ho utilizzato in questo caso un algoritmo di Machine Learning in grado di riconoscere istante per istante le emozioni rilevate dal mio volto, ogni emozione modifica un asse di variazione del carattere. 
 
 
 [vai al progetto](https://editor.p5js.org/gr.ace/full/Ztfd3xQNy) 


![Imgur](https://imgur.com/U8oVxmz.gif)


Infine con lo stesso meccanismo ho agito sul colore del carattere ad ogni sentimento rilevato


[vai al progetto_1](https://editor.p5js.org/gr.ace/full/Se3VX-QkU) [vai al progetto_2](https://editor.p5js.org/gr.ace/full/Q96NWNCD)


![Imgur](https://imgur.com/BKLMymh.gif)

# Progetto
#### Prototipi realizzati con algoritmi di Speech recognition e Sentimen Analysis, in grado di rilevare l'umore della frase e modificare in base a questo un parametro scelto. ####


In questo primo prototipo il rilevamento di una frase positiva equivale ad un carattere light, di una negativa invece Bold.


[vai al progetto](https://editor.p5js.org/gr.ace/full/LE0oLOwA)


![Imgur](https://imgur.com/DiBnuz9.gif)


Una seconda fase ha previsto che aggiungessi la variazione del colore a quella della forma delle lettere, sempre in riferimento al valore ottenuto dalla Sentiment Analysis.

[vai al progetto](https://editor.p5js.org/gr.ace/full/m7IoA91n)


![anteprima](https://imgur.com/xhey1qK.gif)
