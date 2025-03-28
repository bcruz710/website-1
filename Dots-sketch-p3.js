//Storage for previous mouse positions
let prevX, prevY;
let currentX, currentY;
//had mousex and y marked at 0 values, it was causing a lot of problems
function setup() {
  createCanvas(400, 400);
  prevX = mouseX;
  prevY = mouseY;
}

function draw() {
 // background(129, 133, 137);

 filter(BLUR, 1); //BLUR IS OPTIONAL!!!! //was way too high from 230 
  //filter(OPAQUE);
}

function mousePressed() {
  currentX = mouseX + random(-100, 100);
  currentY = mouseY + random(-100, 100);

  //Menu stars
  fill(random(255), random(255), random(255)); //random color
  noStroke();
  ellipse(currentX, currentY, random(50, 150));

  //lines joining stars

  stroke(random(255), random(255), random(255));
  line(prevX, prevY, currentX, currentY);

  prevX = currentX;
  prevY = currentY;
}

//if mouseX >=100,-100,mouseY<=100,-100
//line(mouseX+ellipse,mouseY+ellipse,100,-100)


