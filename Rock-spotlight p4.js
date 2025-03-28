let shapes = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 10; i++) {
    let shape = {
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      type: random(["circle", "square"]),
    };
    shapes.push(shape);

    print(shapes);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    let d = dist(mouseX, mouseY, shape.x, shape.y);

    if (d < 100) {
      //color change
      shape.color = color(random(255), random(255), random(255)); //
      shape.x = random(width); // Move
      //shape to position change
      shape.y = random(height);
    }

    // Draw the shape
    fill(shape.color);
    noStroke();
    if (shape.type === "circle") {
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.type === "square") {
      rect(
        shape.x - shape.size / 2,
        shape.y - shape.size / 2,
        shape.size,
        shape.size
      );
    }
  }

  // Spotlight
  fill(255, 150);
  noStroke();
  ellipse(mouseX, mouseY, 400, 400);
}




  

