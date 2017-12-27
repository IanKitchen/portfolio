function setup() {
	var myCanvas = createCanvas(700, 400);
	myCanvas.parent('stickies');
	
	fill('black');
	textSize(24);
    textFont("Helvetica");
    //text("have fun with stickies...", 0, 32);	
  
    fill('rgba(10%,10%,10%,0.1)')
    noStroke();
    rect(85, 85, 80, 80);
  
    var yellowNote = color('#F7EA5C');
    fill(yellowNote);
    stroke('rgba(80%,80%,80%,0.9)');
    strokeWeight(1);
    rect(80, 80, 80, 80);
  
    fill('black');
    textSize(12);
    textFont("Helvetica");
    text("click for fun!", 88, 100);
}

function draw() {
	

	
  var blueNote = color('#5BA2F4');
  var greenNote = color('#5AF2C2');
  var magentaNote = color('#F85CE0');
  var yellowNote = color('#F7EA5C');
  var purpleNote = color('#CD7FC2');
  var size = 80;
  var half = size/2;
  var offset = 5;

  
  var stick = random(5);
  	
  if (mouseIsPressed) {
	if( mouseX > half && mouseY > half && mouseX < 700-half-offset && mouseY < 400-half-offset){
	
	
	fill('rgba(10%,10%,10%,0.1)')
	noStroke();
	rect(mouseX-half+offset, mouseY-half+offset, size, size);
	
	if (stick <= 1) {
		fill(blueNote);
  	} 
  	else if (stick <= 2) {
		fill(greenNote);
  	} 
  	else if (stick <= 3) {
		fill(magentaNote);
	}
  	else if (stick <= 4) {
		fill(yellowNote);
  	} 
  	else if (stick <= 5) {
		fill(purpleNote);
  	} 
  	
  	stroke('rgba(10%,10%,10%,0.9)');
  	strokeWeight(1);
  	
  	rect(mouseX-half, mouseY-half, size, size);
  	
  	}
  }
  
  
}