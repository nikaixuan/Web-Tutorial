var colors = [];
var status = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButton();
	setUpSquareListener();
	resetFunc();
}

function setUpModeButton(){
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			status = this.textContent==="Easy" ? 3 : 6;
			resetFunc();
		});
	}
}

function setUpSquareListener(){
	for (var i = 0; i < squares.length; i++) {
		//add event handler
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				reset.textContent = "Play Again";
				changeColors(clickedColor);
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
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

reset.addEventListener("click", function(){
	resetFunc();
});

function resetFunc(){
	colors = generateRandomColors(status);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h.style.backgroundColor = "steelblue";
}