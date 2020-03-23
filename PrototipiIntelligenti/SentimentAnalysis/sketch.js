//Grazia Pestillo © 2019 MIT License
//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototypelet faceapi;

let faceapi;
let video;
let detections;
let val=[];
// by default all options are set to true
const detection_options = {
    withLandMarks: true,
    withFaceExpressions: true,
    withFaceDescriptors: false,
}

function setup() {
    createCanvas(400, 240);
    paragraph = createP("A");
    paragraph.position (170, 150);
    paragraph.style ('font-size', 100 + 'px');
 
             

    // load up your video
    filter(GRAY);
    video = createCapture(VIDEO);
  
    video.size(width, height);
    // video.hide(); // Hide the video element, and just show the canvas
    faceapi = ml5.faceApi( video, detection_options, modelReady)
    textAlign(RIGHT);
}

function modelReady() {
    //console.log('ready!')
    //console.log(faceapi)

    faceapi.detect( gotResults)

}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    detections = result;

    background(255);
      
    if (detections) {
        if (detections.length > 0) {
           const {expressions} = detections[0]
            let keys = Object.keys(expressions);
          keys.forEach( (item, idx) => {
             fill(0, 60, 180);
             //text(`${expression}: ${probability}`, 20, idx*20 );
                textSize(12);
                text(`${item}:`, 70, idx * 20 + 20);
              // funzione che prende il valore   
                val[idx] = expressions[item];
            let valore=map(expressions[item], 0, 1, 0,width/2);
                rect(80, idx * 20 + 10, valore, 15);
            
            })
          val[0]=floor(map(val[0],0,1,38,255));
          val[1]=floor(map(val[1],0,1,260, 402));
          val[2]=floor(map(val[2],0,1,5,500));
          val[3]=floor(map(val[3],0,1,150,350));
          val[4]=floor(map(val[4],0,1,4,85));
          //val[5]=floor(map(val[5],0,1,38,255));
          //val[6]=floor(map(val[6],0,1,38,255));
          //val[7]=floor(map(val[7],0,1,38,255));
          
        var padding = width/(paragraph.length+1);
  
       weightControl = sin(frameCount/10.0)*100+150;
      paragraph.elt.style['font-variation-settings'] =
    ` "wght" ${val[0]}, "wdth" ${val[1]},"XOPQ" ${val[2]}, "YTDE" ${val[3]}, "YOPQ" ${val[4]} `;
      paragraph.elt.style.color = 'white';
      paragraph.elt.style.position = 'CENTER';
           // console.log (val);
      
        }

    }
    faceapi.detect( gotResults)
} 