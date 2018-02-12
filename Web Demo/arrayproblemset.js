function printreverse(arr){
	var arrb = [];
	for (var i = arr.length-1; i >= 0; i--) {
		var j = 0;
		arrb[j] = arr[i];
		j++;
	}
	return arrb;
}

function isUniform(arr){
	var flag = arr[0];
	var f = true;
	arr.forEach(function(elem){
		if (elem!==flag) {
			f = false;
		}
	})
	return f;
}

function sumArray(arr){
	var result = 0;
	arr.forEach(function(elem){
		result+=elem;
	})
	return result;
}

function max(arr){
	var maxn = arr[0];
	arr.forEach(function(elem){
		if (maxn<elem) {
			maxn = elem;
		}
	})
	return maxn; 
}