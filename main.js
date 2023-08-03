noseX = 0;
noseY = 0;
difference = 0;
leftwrist_x = 0;
rightwrist_x = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background('#9c2a6a');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);

}

function modelLoaded(){
    console.log('Model is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX, "noseY = " + noseY);

        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftwrist_x - rightwrist_x);

        console.log("leftwrist_x = " + leftwrist_x + "rightwrist_x" + rightwrist_x + "Difference" + difference);

        
    }
}

document.getElementById("font_size").innerHTML = "Font Size Of The Width And Height Will Be = "+difference+"px";