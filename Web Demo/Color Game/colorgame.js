var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
colordisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	//add initial color
	squares[i].style.backgroundColor = colors[i];
	//add event handler
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor===pickedColor) {

		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}