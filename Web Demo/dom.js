var button1 = document.querySelector("#click");
var button2 = document.querySelector("#color");
var p = document.querySelector("p");
var body = document.querySelector("body");

button1.addEventListener('click', function(){
	if (p.textContent === "No click") {
		p.textContent = "Someone click me";
	}else{
		p.textContent = "No click";
	}
	
})

button2.addEventListener('click',function(){
	if (body.style.background === "white") {
		body.style.background = "red";
	}else{
		body.style.background = "white";
	}
})
