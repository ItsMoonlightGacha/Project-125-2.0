nose_X=0;
nose_Y=0;
difference=0;
rightwristX=0;
leftwristY=0;
function setup() {
    canvas=createCanvas(500,500);
    canvas.position(500,150);
    background("rgb(145, 194, 223)");
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }
function modelLoaded() {
  console.log('modelLoaded');
}
function gotPoses(results) {
  if(results.length>0) {
      console.log(results);
      nose_X=results[0].pose.nose.x;
      nose_Y=results[0].pose.nose.y;
      console.log("nose X ="+nose_X+"nose Y ="+nose_Y);
      leftwristX=results[0].pose.leftWrist.x;
      rightwristX=results[0].pose.rightWrist.x;
      difference=floor(leftwristX - rightwristX);
  }
}
function draw() {
  background('blue');

  document.getElementById('font_size').innerHTML=""+difference+"px";

  textSize(difference);
  fill('#FFE787');
  text('Daryna',50,400);
}