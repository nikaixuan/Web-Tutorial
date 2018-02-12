var age = prompt("How old are you??");
if (age<0) {
	console.log("Wrong age!!");
}

if (age%2 === 1) {
	console.log("odd");
	if (age==21) {
		console.log("Happy 21");
	}
}

for (var i = 1; i < age; i++) {
	if (age == i*i) {
		console.log("perfect square!!");
	}
}