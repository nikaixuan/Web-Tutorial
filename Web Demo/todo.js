var list = [];
var flag = true
while(flag){
	var op = prompt("What do you want to do?");
	if (op==="new") {
		var add = prompt("what to add?");
		list.push(add);
		console.log("add success");
	}else if (op==="list") {
		console.log("********");
		list.forEach(function(elem,i){
			if (elem!=="") {
				console.log(i+": "+elem);
			}
		})
		console.log("********");
	}else if(op==="delete"){
		var del = prompt("what to delete?");
		list.splice(del,1);
	}else if (op==="quit") {
		flag = false;
	}
}
