function isEven(num){
	if (Number(num)%2===0) {
		return true;
	}else{
		return false;
	}
}

function factorial(number){
	if (number<0) {
		return "wrong number"
	}else if(Number(number) === 0){
		return 1;
	}else{
		return number*factorial(number-1);
	}
}

function kebabToSnake(s){
	return s.replace("-","_");
}