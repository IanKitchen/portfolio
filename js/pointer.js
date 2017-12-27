
var indicatorHeight = 0;
var indicatorWidth = 40;

function setup() {
	var pointerCanvas = createCanvas(200, 20);
	pointerCanvas.parent('pointer');
	background('rgba(50%,25%,25%,1)');
	fill('rgba(100%,100%,100%,1)');
}

function draw() {

	if(indicatorHeight<=20)
	{
		background('rgba(25%,25%,25%,1)');
		triangle(100-indicatorWidth/2,indicatorHeight,100+indicatorWidth/2,indicatorHeight,100,0);
		indicatorHeight = indicatorHeight+1;
	}
}