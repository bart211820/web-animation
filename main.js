$(document).ready(function(){
	rescaleBackground();

	$("#optionsButton").click(function() {
		$("#optionsScreen").css("display", "block");
	});
	$("#closeOptionsButton").click(function() {
		$("#optionsScreen").css("display", "none");
	});

	var colorR = 0;
	var colorG = 0;
	var colorB = 0;
	var special = 1;

	$(document).on('input', '#colorRslider', function() {
	    colorR = $('#colorRslider').val();
	    setColors();
	});

	$(document).on('input', '#colorGslider', function() {
	    colorG = $('#colorGslider').val();
	    setColors();
	});

	$(document).on('input', '#colorBslider', function() {
	    colorB = $('#colorBslider').val();
	    setColors();
	});

	$(document).on('input', '#specialSlider', function() {
	    special = $('#specialSlider').val();
	    $("#content").css("transform", "perspective(0px) rotateY(" + (special) + "deg)");
	});

	$(document).on('input', '#colorRslider2', function() {
	    colorR = $('#colorRslider2').val();
	    setColors();
	});

	$(document).on('input', '#colorGslider2', function() {
	    colorG = $('#colorGslider2').val();
	    setColors();
	});

	$(document).on('input', '#colorBslider2', function() {
	    colorB = $('#colorBslider2').val();
	    setColors();
	});

	$(document).on('input', '#specialSlider2', function() {
	    special = $('#specialSlider2').val();
	    $("#content").css("transform", "perspective(0px) rotateY(" + (special) + "deg)");
	});

	function setColors() {
		$(".squareBorder").css("border-color", "rgb(" + colorR + " " + colorG + " " + colorB + ")");
		$("#gameContainer").css("border-color", "rgb(" + colorR + " " + colorG + " " + colorB + ")");
		$("body").css("color", "rgb(" + colorR + " " + colorG + " " + colorB + ")");
		console.log("rgb(" + colorR + " " + colorG + " " + colorB + ")");
	}



	$(document).on('mouseenter', '.squareBorder', function () {
		$(this).addClass("squareContainerSelected");
	}).on('mouseleave', '.squareBorder', function () {
		$(this).removeClass("squareContainerSelected");
	});

	function resetFields() {
		$(".squareContainer").removeClass("blinkBlack");
		$(".squareContainer").removeClass("tempBlack");
		$(".squareContainer").removeClass("turnBlack");
		$(".squareContainer").removeClass("blackGoOut");
		$(".squareContainer").removeClass("removeBlack");

		$(".squareContent").removeClass("contentAppear");
		$(".squareContent").removeClass("arrow1");
		$(".squareContent").removeClass("arrow2");
		$(".squareContent").removeClass("arrow3");
		$(".squareContent").removeClass("arrow4");

		$(".squareContent").removeClass("pointN");
		$(".squareContent").removeClass("pointNO");
		$(".squareContent").removeClass("pointO");
		$(".squareContent").removeClass("pointOZ");
		$(".squareContent").removeClass("pointZ");
		$(".squareContent").removeClass("pointZW");
		$(".squareContent").removeClass("pointW");
		$(".squareContent").removeClass("pointNN");
	}

	function showArrow(location, arrowKind, rotation) {
		$("#square" + location + " .squareContent").addClass("point" + rotation);
		$("#square" + location + " .squareContent").addClass("arrow" + arrowKind);
		$("#square" + location + " .squareContent").addClass("contentAppear");
	}

	$(document).on('mouseenter', '.state0 #squareB1', function () {
		resetFields();

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
		resetFields();

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

	$(document).on('mouseenter', '.state2 #squareA4', function () {
		resetFields();

		showArrow("A4", "2", "Z");
		setTimeout(function(){
			showArrow("B2", "2", "OZ");
		}, 250);
		setTimeout(function(){
			showArrow("C6", "2", "Z");
		}, 500);
		setTimeout(function(){
			showArrow("D7", "2", "Z");
		}, 750);
		setTimeout(function(){
			showArrow("F3", "2", "OZ");
		}, 1000);
		setTimeout(function(){
			showArrow("G5", "2", "OZ");
		}, 1250);
		setTimeout(function(){
			showArrow("H3", "2", "O");
		}, 1500);
		setTimeout(function(){
			showArrow("I2", "2", "O");
		}, 1750);
		setTimeout(function(){
			showArrow("J7", "2", "WN");
		}, 2000);
	}).on('mouseleave', '.state2 #squareA4', function () {
		$("#gameContainer").removeClass("state2");
		$("#gameContainer").addClass("state3");
	});

	$(document).on('mouseenter', '.state3 #squareI6', function () {
		resetFields();
		showArrow("F7", "3", "W");
		setTimeout(function(){
			showArrow("A4", "3", "Z");
		}, 250);
		setTimeout(function(){
			showArrow("F1", "3", "O");
		}, 500);
		setTimeout(function(){
			showArrow("J1", "3", "NO");
		}, 750);
		setTimeout(function(){
			showArrow("J7", "3", "WN");
		}, 1000);
		setTimeout(function(){
			showArrow("D6", "3", "ZW");
		}, 1250);
		setTimeout(function(){
			showArrow("B5", "3", "Z");
		}, 1500);
		setTimeout(function(){
			showArrow("B3", "3", "Z");
		}, 1750);
		setTimeout(function(){
			showArrow("D2", "3", "OZ");
		}, 2000);
		setTimeout(function(){
			showArrow("I4", "3", "N");
		}, 2250);
		setTimeout(function(){
			showArrow("G5", "3", "WN");
		}, 2500);
		setTimeout(function(){
			showArrow("G3", "3", "NO");
		}, 2750);
	}).on('mouseleave', '.state3 #squareI6', function () {
		$("#gameContainer").removeClass("state3");
		$("#gameContainer").addClass("state4");
	});

	$(document).on('mouseenter', '.state4 #squareF4', function () {
		resetFields();
		$("#squareE4").addClass("blackGoOut");
		setTimeout(function(){
			$("#squareD4").addClass("blackGoOut");
		}, 75);
		setTimeout(function(){
			$("#squareC4").addClass("blackGoOut");
			$("#squareD4").removeClass("blackGoOut");
		}, 150);
		setTimeout(function(){
			$("#squareD4").addClass("blackGoOut");
			$("#squareE4").removeClass("blackGoOut");
		}, 275);
		setTimeout(function(){
			$("#squareE4").addClass("blackGoOut");
		}, 400);
		setTimeout(function(){
			$("#squareF4").addClass("blackGoOut");
		}, 475);
		setTimeout(function(){
			$("#squareG4").addClass("blackGoOut");
		}, 550);
		setTimeout(function(){
			$("#squareH4").addClass("blackGoOut");
		}, 600);
		setTimeout(function(){
			$("#squareI4").addClass("blackGoOut");
		}, 630);
		setTimeout(function(){
			$("#squareJ4").addClass("blackGoOut");
			$("#squareJ3").addClass("blackGoOut");
			$("#squareJ5").addClass("blackGoOut");
		}, 650);
		setTimeout(function(){
			$("#squareJ2").addClass("blackGoOut");
			$("#squareJ1").addClass("blackGoOut");
			$("#squareI1").addClass("blackGoOut");
			$("#squareJ6").addClass("blackGoOut");
			$("#squareJ7").addClass("blackGoOut");
			$("#squareI7").addClass("blackGoOut");
		}, 700);
		setTimeout(function(){
			$("#squareH1").addClass("blackGoOut");
			$("#squareG1").addClass("blackGoOut");
			$("#squareH7").addClass("blackGoOut");
			$("#squareG7").addClass("blackGoOut");
		}, 750);
		setTimeout(function(){
			$("#squareF1").addClass("blackGoOut");
			$("#squareE1").addClass("blackGoOut");
			$("#squareF7").addClass("blackGoOut");
			$("#squareE7").addClass("blackGoOut");
		}, 820);
		setTimeout(function(){
			$("#squareD1").addClass("blackGoOut");
			$("#squareC1").addClass("blackGoOut");
			$("#squareD7").addClass("blackGoOut");
			$("#squareC7").addClass("blackGoOut");
		}, 910);
		setTimeout(function(){
			$("#squareB1").addClass("blackGoOut");
			$("#squareB7").addClass("blackGoOut");
		}, 1010);
		setTimeout(function(){
			resetFields();
		}, 1070);
		setTimeout(function(){
			$("#squareC1").addClass("blackGoOut");
			$("#squareC7").addClass("blackGoOut");
		}, 1110);
		setTimeout(function(){
			$("#squareD1").addClass("blackGoOut");
			$("#squareD7").addClass("blackGoOut");
			$("#squareE1").addClass("blackGoOut");
			$("#squareE7").addClass("blackGoOut");
		}, 1200);
		setTimeout(function(){
			$("#squareF1").addClass("blackGoOut");
			$("#squareF7").addClass("blackGoOut");
			$("#squareG1").addClass("blackGoOut");
			$("#squareG7").addClass("blackGoOut");
		}, 1270);
		setTimeout(function(){
			$("#squareH1").addClass("blackGoOut");
			$("#squareH7").addClass("blackGoOut");
			$("#squareI1").addClass("blackGoOut");
			$("#squareI7").addClass("blackGoOut");
		}, 1320);
		setTimeout(function(){
			$("#squareH1").addClass("blackGoOut");
			$("#squareH7").addClass("blackGoOut");
			$("#squareI1").addClass("blackGoOut");
			$("#squareI7").addClass("blackGoOut");
		}, 1360);
		setTimeout(function(){
			$("#squareJ1").addClass("blackGoOut");
			$("#squareJ2").addClass("blackGoOut");
			$("#squareJ3").addClass("blackGoOut");
			$("#squareJ5").addClass("blackGoOut");
			$("#squareJ6").addClass("blackGoOut");
			$("#squareJ7").addClass("blackGoOut");
		}, 1390);

		setTimeout(function(){
			$("#squareJ1").addClass("blackGoOut");
			$("#squareI3").addClass("blackGoOut");
			$("#squareI4").addClass("blackGoOut");
			$("#squareI5").addClass("blackGoOut");
			$("#squareH3").addClass("turnBlack");
			$("#squareH5").addClass("turnBlack");
		}, 1440);

		setTimeout(function(){
			$("#squareH4").addClass("turnBlack");
			$("#squareG3").addClass("turnBlack");
			$("#squareG5").addClass("turnBlack");
		}, 1480);
		setTimeout(function(){
			$("#squareG4").addClass("turnBlack");
			$("#squareF3").addClass("turnBlack");
			$("#squareF5").addClass("turnBlack");
		}, 1520);
		setTimeout(function(){
			$("#squareF4").addClass("turnBlack");
			$("#squareE3").addClass("turnBlack");
			$("#squareE5").addClass("turnBlack");
		}, 1560);
		setTimeout(function(){
			$("#squareE2").addClass("turnBlack");
			$("#squareE4").addClass("turnBlack");
			$("#squareE6").addClass("turnBlack");
			$("#squareD3").addClass("turnBlack");
			$("#squareD5").addClass("turnBlack");
		}, 1600);
		setTimeout(function(){
			$("#squareD4").addClass("turnBlack");
			$("#squareC4").addClass("turnBlack");
		}, 1640);
		setTimeout(function(){
			$("#squareB4").addClass("blackGoOut");
		}, 1680);
	}).on('mouseleave', '.state4 #squareF4', function () {
		$("#gameContainer").removeClass("state4");
		$("#gameContainer").addClass("state5");
	});

	$(document).on('mouseenter', '.state5 #squareB4', function () {
		resetFields();
		
	}).on('mouseleave', '.state3 #squareI9', function () {
		$("#gameContainer").removeClass("state5");
		$("#gameContainer").addClass("state6");
	});

});

$(window).resize(rescaleBackground);

function rescaleBackground(){
	var backgroundHTML = "";
	for (i = 0; i < 1000; i++) {
		backgroundHTML = backgroundHTML + '<div class="backgroundBox"></div>';
	}
	$('.background').html(backgroundHTML);

	var vensterWidth = $(window).width();
	var vensterHeight = $(window).height();
	var squareWidth = $(".squareContainer").width();
	var backgroundWidth = squareWidth * Math.floor(((vensterWidth - (vensterHeight * 0.7)) / 2) / squareWidth) + 2;
	$(".background").css("width", backgroundWidth + "px");
	console.log("did the thing");
}