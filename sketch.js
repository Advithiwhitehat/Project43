function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate(400, 200);

  fill(255, 255, 255)
  textSize(30)
  text("Clock", 600, 100)
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  var scAngle = map(sc, 0, 60, 0, 360);

  var mnAngle = map(mn, 0, 60, 0, 360);

  var hrAngle = map(hr, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  strokeWeight(8);
  stroke(255, 0, 0);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(mnAngle);
  strokeWeight(8);
  stroke(0, 255, 0);
  line(0, 0, 140, 0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(8);
  stroke(0, 0, 255);
  line(0, 0, 200, 0);
  pop();

}