var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h = document.querySelector("h1");
colordisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	//add initial color
	squares[i].style.backgroundColor = colors[i];
	//add event handler
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h.style.backgroundColor = color;
}

function pickColor(){
	var gen = Math.floor(Math.random()*colors.length);
	return colors[gen];
}

function generateRandomColors(number){
	 var arr = [];

	 for (var i = 0; i < number; i++) {
	 	arr.push(randomColor());
	 }
	 return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256); 
	return "rgb("+r+", "+g+", "+b+")";
}