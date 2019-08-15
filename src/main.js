var lastPointx = 70 / window.innerWidth
var lastPointy = 90 / window.outerWidth

var pivotX = window.innerWidth / 2.0
var pivotY = window.innerHeight / 2.0

var r = 3.6

function logisticMap(x){
	return r * x * (1 - x)
}

function logisticPair(x,y){
	return (logisticMap(x), logisticMap(y))
}

function setup(){
	createCanvas(window.innerWidth, window.innerHeight)
	// line(15, 25, 70, 90);
}


function makeLine(constrainedAngle, length){
	scaledAngle = constrainedAngle * Math.PI * 2
	xscale = cos(constrainedAngle)
	yscale = sin(constrainedAngle)

	line(pivotX - xscale * (length /2), pivotY - yscale*(length/2), pivotX + xscale * (length/2), pivotY + yscale * (length/2))

}

function draw(){
	var angle = 0.4
	for (var n = 0; n < 1000; n++){
		var newangle = logisticMap(angle)
		makeLine(newangle, 1200 * abs(newangle - angle))
		angle = newangle
	}
	noLoop()
}
// function mouseClicked(){
// 	line(lastPointx, lastPointy, mouseX, mouseY)
// 	lastPointx = mouseX
// 	lastPointy = mouseY
// }
function mouseClicked(){
	clear()
	r = r + (4 - r) * 0.5
	draw()
}