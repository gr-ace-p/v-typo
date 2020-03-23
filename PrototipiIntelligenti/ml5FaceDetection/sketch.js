//Grazia Pestillo © 2019 MIT License
//V-typo. Animate meanings. Inserti testuali cinematografici intelligenti_prototipi
//Educational purpose, master graduation project prototypelet faceapi;


let video;
let detections;

// by default all options are set to true
const detection_options = {
    //withLandmarks: true,
    withDescriptors: false,
}


function setup() {
    createCanvas(720, 560);
  
  paragraph = createP("Abcd");
  //paragraph1 = createP ("grace");
  paragraph.position (CENTER);
  //paragraph1.position(0, -20);
  

    // load up your video
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide(); 
  
    faceapi = ml5.faceApi(video, detection_options, modelReady);
  
    
  
}

function modelReady() {
    console.log('ready!')
    console.log(faceapi)
    faceapi.detect(gotResults)

}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    detections = result;

    // background(220);
    background(255);
    image(video, 0,0, width, height);
    filter (GRAY);
    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            drawBox(detections)
            //drawLandmarks(detections)
        }

    }
    faceapi.detect(gotResults)
}

function drawBox(detections){
    for(let i = 0; i < detections.length; i++){
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        noFill();
        //noStroke();
        stroke(0, 255, 0);
        strokeWeight(2);
        rect(x, y, boxHeight, boxHeight);
      
      //controlla la font-size del carattere
      mappeedboxHeight = map (boxHeight, 22, 250, 150, 90);
      //controlla wdth
      mappeedboxHeight1 = map (boxHeight, 22, 250, 85, 4);
      //controlla wgth
      mappeedboxWidth = map (boxWidth, 22, 250, 120, 250);
      //controlla altezza x
     mappeedboxWidth1 = map (boxWidth, 22, 250, 150, 88);
    
      //console.log (floor(boxHeight),floor(boxWidth), mappeedboxWidth, mappeedboxHeight1,mappeedboxWidth1, mappeedboxHeight );
       var padding = width/(paragraph.length+1);
  
       weightControl = sin(frameCount/10.0)*100+150;
      paragraph.elt.style['font-variation-settings'] =
    ` "wght" ${mappeedboxWidth}, "YOPQ" ${mappeedboxHeight1},"GRAD" ${mappeedboxWidth1} `;
      paragraph.elt.style.color = 'white';
      paragraph.elt.style.position = 'CENTER';
      
      
      paragraph.style ('font-size', mappeedboxHeight + 'px');
      
      
      
     
       
       paragraph.position(240, 200);
     
    }
    
}
  
