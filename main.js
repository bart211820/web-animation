$(document).ready(function(){

	$(document).on('mouseenter', '.squareBorder', function () {
		$(this).addClass("squareContainerSelected");
	}).on('mouseleave', '.squareBorder', function () {
		$(this).removeClass("squareContainerSelected");
	});

	$(document).on('mouseenter', '.state0 #squareB1', function () {
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
	}).on('mouseleave', '.state0 #squareB1', function () {
		$("#gameContainer").removeClass("state0");
		$("#gameContainer").addClass("state1");
	});

	$(document).on('mouseenter', '.state1 #squareI4', function () {
		$(".squareContainer").removeClass("tempBlack");
		$(".squareContainer").removeClass("turnBlack");

		$("#squareI4").addClass("turnBlack");
		$("#squareI3").addClass("turnBlack");
		$("#squareI5").addClass("turnBlack");
		$("#squareJ4").addClass("turnBlack");
		setTimeout(function(){
			$("#squareI2").addClass("turnBlack");
			$("#squareI6").addClass("turnBlack");
			$("#squareJ3").addClass("turnBlack");
			$("#squareJ5").addClass("turnBlack");
		}, 250);
		setTimeout(function(){
			$("#squareI1").addClass("turnBlack");
			$("#squareI7").addClass("turnBlack");
			$("#squareJ2").addClass("turnBlack");
			$("#squareJ6").addClass("turnBlack");
		}, 500);
		setTimeout(function(){
			$("#squareH1").addClass("turnBlack");
			$("#squareH7").addClass("turnBlack");
		}, 750);
		setTimeout(function(){
			$("#squareG1").addClass("turnBlack");
			$("#squareG7").addClass("turnBlack");
		}, 1000);
		setTimeout(function(){
			$("#squareF1").addClass("turnBlack");
			$("#squareF7").addClass("turnBlack");
		}, 1250);
		setTimeout(function(){
			$("#squareE1").addClass("turnBlack");
			$("#squareE7").addClass("turnBlack");
		}, 1500);
		setTimeout(function(){
			$("#squareD1").addClass("turnBlack");
			$("#squareD7").addClass("turnBlack");
		}, 1750);
		setTimeout(function(){
			$("#squareC1").addClass("turnBlack");
			$("#squareC7").addClass("turnBlack");
			$("#squareD2").addClass("turnBlack");
			$("#squareD6").addClass("turnBlack");
		}, 2000);
		setTimeout(function(){
			$("#squareB1").addClass("turnBlack");
			$("#squareB7").addClass("turnBlack");
			$("#squareC2").addClass("turnBlack");
			$("#squareC6").addClass("turnBlack");
		}, 2250);
		setTimeout(function(){
			$("#squareB2").addClass("turnBlack");
			$("#squareB6").addClass("turnBlack");
		}, 2500);
		setTimeout(function(){
			$("#squareA2").addClass("turnBlack");
			$("#squareB3").addClass("turnBlack");
			$("#squareA6").addClass("turnBlack");
			$("#squareB5").addClass("turnBlack");
		}, 2750);
		setTimeout(function(){
			$("#squareA3").addClass("turnBlack");
			$("#squareA5").addClass("turnBlack");
		}, 3000);
		setTimeout(function(){
			$("#squareA4").addClass("turnBlack");
		}, 3250);
	}).on('mouseleave', '.state1 #squareI4', function () {
		$("#gameContainer").removeClass("state1");
		$("#gameContainer").addClass("state2");
	});

});