let angle1 = 0;

let angle2 = Math.PI / 4; //start of the second triangle at a different rotation
let triangleSize = 8;
let roadAngle = 3.14159 / 10;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  //postioning for triangles in the sky
  triangleX = width / 2;
  triangleY = height / 5;
}
function draw() {
  background(0);
  //centerpoint for the road
  let centerX = width / 2;
  let centerY = height / 2;

  //Main road using two lines
  stroke(255, 150); //subtle white stroke
  strokeWeight(3); //thin road lines
  let vanishingPointX = width / 2;
  let vanishingPointY = height / 2; //this is where thr road converges

  let roadLineOffset = 30;

  //left edge of the road
  line(centerX - roadLineOffset, centerY, 0, height); //Left line

  //right edge of the road
  line(centerX + roadLineOffset, centerY, width, height); //Right line

  //Smaller yellor rectangles
  fill(255, 255, 0);
  //first yellow rectangle
  rect(centerX, height * 0.7, width * 0.015, height / 30);
  rect(centerX, height * 0.85, width * 0.015, height / 30);

  noStroke();
  fill(255, 255, 0);
  let lineSpacing = 25; //space between the center lines
  for (let i = 0; i < height; i += lineSpacing) {
    let x = map(
      i,
      0,
      height,
      centerX - roadLineOffset,
      centerX + roadLineOffset
    );
    line(x, i - 50, x, i + 50);
  }
  //spinning triangles(shootingstar)
  push();
  translate(triangleX, triangleY); //Positioning the first triangle
  rotate(angle1); //apply rotation to make it spin
  fill(255, 255, 0);
  noStroke();
  triangle(
    -triangleSize,
    triangleSize,
    0,
    -triangleSize * 1.5,
    triangleSize,
    triangleSize
  );
  pop();

  triangleX += 5; //increase the horiontal speed

  //reset for the star
  if (triangleX > width + 50) {
    triangleX = -50; //reset to the left side
  }

  //controls for the rotation of the star

  angle1 += 0.08; //faster spinning for the first triangle
  angle2 += 0.1; //faster spinning for the second triangle

  //mouse-click function for the star
  let d = dist(mouseX, mouseY, triangleX, triangleY);
  if (d < triangleSize * 2);
}

