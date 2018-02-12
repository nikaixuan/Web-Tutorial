var score1 = document.getElementById("spanone");
var score2 = document.getElementById("spantwo");
var select = document.querySelector("input");
var playto = document.getElementById("playto");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var count1 = 0;
var count2 = 0;
var winningscore = 5;
var gameover = false;


p1.addEventListener("click", function(){
	if (!gameover) {
		count1+=1;
		if (count1===winningscore) {
			gameover = true;
			score1.classList.add("winner");
		}
		score1.textContent = count1;
}	
})
p2.addEventListener("click", function(){
	if (!gameover) {
		count2+=1;
		if (count2===winningscore) {
			gameover = true;
			score2.classList.add("winner");
		}
		score2.textContent = count2;
	}
})
reset.addEventListener("click", function(){
	resetnum();
 })

select.addEventListener("change", function(){
	playto.textContent = select.value;
	winningscore = Number(select.value);
	resetnum();
})

function resetnum(){
	count1 = 0;
	count2 = 0;
	score1.textContent = count1;
	score2.textContent = count2;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	gameover = false;
}

