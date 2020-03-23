
let mic;




function setup() {
  
createCanvas(windowWidth, windowHeight);
  
  paragraph = createP("hello words");
  paragraph.position (20,20);
  mic = new p5.AudioIn()
  mic.start();
}


function draw() {
  
 background(255);
 micLevel = mic.getLevel();
 micLevel1 = map (micLevel, 0, 0.5, 38, 250);
 micLevel2 = map (micLevel, 0, 0.5, 455, 600);
 var padding = width/(paragraph.length+1);
  
 weightControl = sin(frameCount/10.0)*100+150;
 paragraph.elt.style['font-variation-settings'] =
   //` "wght" ${40}, "YTLC" ${0}, "YOPQ" ${0}, "YTAS" ${0}`;
  ` "wght" ${micLevel1}, "YTLC" ${micLevel2} `;
  


 //paragraph.elt.style.border = '3px solid red';
 
  
  
//console.log(latestData, latestData3, latestData2, latestData4, latestData5 ); 
  
  console.log(micLevel1, micLevel2);
  
    
  

    
  paragraph.position(windowWidth/3, windowHeight/6);

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}





