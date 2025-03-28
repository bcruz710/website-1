let y = -50

let y1 = -200 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220);
  //Main Road
  strokeWeight(5)
  stroke(255,255,255)
  fill(0,0,0);
  rect(width/2,height/2, width * 0.8,height);
  //Center Lines
  noStroke();
  noFill()
  fill(255,255,0)
  rect(width / 2 , y , width * 0.025, height / 7);
  
  fill (255,255,0)
  //removed the +150 since that was making it come closer aftr each respawn
  rect(width / 2 , y1 , width * 0.025,height / 7);


  
  y = y + 4 
  y1 = y1 + 4 
  if (y > height + 50) { y = -50}
  
   if (y1 > height - 100) { y1 = -200}
}
function mousePressed(){
  y = -50;
  y1 = -200
}



