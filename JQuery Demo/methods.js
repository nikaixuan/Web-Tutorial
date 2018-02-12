$("#firstb").on("click",function(){
	alert("click");
});

$("#secondb").click(function(){
	$("h1").css("color","red");
});

// $("input").keypress(function(){
// 	$("h1").text("1")
// });

$("input").keypress(function(event){
	$("h1").text(event.which)
	if (event.which === 13) {
		alert("ENTER!!");
	}
});

$("button").on("mouseenter", function(){
	$(this).css("color","red");
});