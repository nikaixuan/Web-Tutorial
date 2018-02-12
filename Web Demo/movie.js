var movies = [
	{
		name: "In bruges",
		rate: 5,
		hasWatch: true
	},
	{
		name: "Frozen",
		rate: 4.5,
		hasWatch: false
	},
	{
		name: "Mad max",
		rate: 5,
		hasWatch: true
	},
	{
		name: "Les",
		rate: 3.5,
		hasWatch: false
	}
]

movies.forEach(function(elem){
	var seen;
	if (elem.hasWatch) {
		seen = "have ";
	}else{
		seen = "have not ";
	}
	console.log("You "+seen+"seen "+elem.name+" - "+elem.rate+" stars")
})