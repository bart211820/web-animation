$(document).ready(function(){

	$(".squareBorder").hover(function() {
		$(this).addClass("squareContainerSelected");
	}, function() {
		$(this).removeClass("squareContainerSelected");
	});	

	$(".state0 #squareB1").hover(function() {

		$("#gameContainer").removeClass("state0");
		$("#gameContainer").addClass("state1");

		$("#squareB1").removeClass("blinkBlack");
		$("#squareB2").addClass("tempBlack");
		setTimeout(function(){
			$("#squareB3").addClass("tempBlack");
		}, 250);
		setTimeout(function(){
			$("#squareB4").addClass("turnBlack");
		}, 500);
		setTimeout(function(){
			$("#squareC4").addClass("turnBlack");
		}, 750);
		setTimeout(function(){
			$("#squareD4").addClass("turnBlack");
		}, 1000);
		setTimeout(function(){
			$("#squareE4").addClass("turnBlack");
		}, 1250);
		setTimeout(function(){
			$("#squareF4").addClass("turnBlack");
		}, 1500);
		setTimeout(function(){
			$("#squareG4").addClass("turnBlack");
			$("#squareF3").addClass("turnBlack");
			$("#squareF5").addClass("turnBlack");
		}, 1750);
		setTimeout(function(){
			$("#squareF2").addClass("turnBlack");
			$("#squareF6").addClass("turnBlack");
			$("#squareG3").addClass("turnBlack");
			$("#squareG5").addClass("turnBlack");
			$("#squareH4").addClass("turnBlack");
		}, 2000);
		
	}, function() {
	  
	});





	// $(".state1 #squareB2").hover(function() {
	// 	$("#gameContainer").removeClass("state1");
	// 	$("#gameContainer").addClass("state2");
	// }, function() {
	  
	// });

});