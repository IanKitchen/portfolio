function setup() {
	var myCanvas = createCanvas(700, 700);
	myCanvas.parent('stickies');
}

function draw() {
  //if (mouseIsPressed) {
  //  fill(128);
  //} else {
  //  fill(255);
  //}
  
  var stick = random(255);
  
  fill(random(255), random(255), random(255));
  
  if (stick <= 25)
  	rect(mouseX-24, mouseY-24, 48, 48);
}