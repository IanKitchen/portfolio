function setup() {
	var myCanvas = createCanvas(800, 40);
	myCanvas.parent('thumbnailsp5');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 16, 16);
}