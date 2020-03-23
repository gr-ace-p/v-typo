//Grazia Pestillo © 2018 MIT License
//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototype





let serial;
let latestData = "waiting for data";
var portName = '/dev/tty.usbmodem14201';
var paragraph;
var arrdata=[];
let latestData2 = "waiting for data";
let latestData3 = "waiting for data";
let latestData4 = "waiting for data";
let latestData5 = "waiting for data";
let mic;






function setup() {
  
createCanvas(windowWidth, windowHeight);
paragraph = createP("variable fonts");
  paragraph.position (20,20);
  mic = new p5.AudioIn()
  mic.start();


 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbmodem14101'); 

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
  
 
 
}




function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 //console.log(currentString);
  arrdata=currentString.split(';' , 5);
  
  if (arrdata.length==5){
   latestData = arrdata[0];
   latestData2 = arrdata[1]; 
   latestData3 = arrdata[2];
   latestData4 = arrdata[3];
   latestData5 = arrdata[4];

  }
 
}

function draw() {
  
 background(255);
  micLevel = mic.getLevel();
  micLevel = map (micLevel, 0, 0.5, 40, 255);
 
  
 var padding = width/(paragraph.length+1);
  
 weightControl = sin(frameCount/10.0)*100+150;
 paragraph.elt.style['font-variation-settings'] =
   ` "wght" ${latestData}, "YTLC" ${latestData3}, "YOPQ" ${latestData2}, "YTAS" ${latestData4}`;
  


//paragraph.style ('font-size', micLevel + 'px');
 //paragraph.elt.style.border = '3px solid red';
 
  
  
//console.log(latestData, latestData3, latestData2, latestData4, latestData5 );  
  
    
  

    
  paragraph.position(windowWidth/3, windowHeight/12);

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}





