(function (){
"use strict";

//global variables
var sequence = [];
var playerChoice;

//random number generator from 1-4
function randomNumber(){
	var number = parseInt(Math.random() * (5 - 1) + 1);
	console.log(number);
	sequence.push(number);
	boxSelected(sequence);
};

randomNumber();

function boxSelected(input){
	for (var i = 0; i < input.length; i++){
		if (input[i] == 1) {
			$("#red").css("opacity", "0.75");
			setTimeout(function(){
				$("#red").css("opacity", "1");
			}, 500);
		} else if(input[i] == 2) {
			$("#blue").css("opacity", "0.75");
			setTimeout(function(){
				$("#blue").css("opacity", "1");
			}, 500);
		} else if(input[i] == 3) {
			$("#green").css("opacity", "0.75");
			setTimeout(function(){
				$("#green").css("opacity", "1");
			}, 500);
		} else if(input[i] == 4) {
			$("#yellow").css("opacity", "0.75");
			setTimeout(function(){
				$("#yellow").css("opacity", "1");
			}, 500);
		};
	};
};

// function compare(number){
// 	if()
// };

//assigning the numbers to each keypress
//up (1)
$(document).on("keydown", function(e){
	if(e.keyCode == 38){
		// compare(1);
		$("#red").css("opacity", "0.75");
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 38){
		$("#red").css("opacity", "1");
	};
});

//left (2)
$(document).on("keydown keyup", function(e){
	if(e.keyCode == 37){
		//compare(2);
		$("#blue").css("opacity", "0.75");
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 37){
		$("#blue").css("opacity", "1");
	};
});

//right (3)
$(document).on("keydown keyup", function(e){
	if(e.keyCode == 39){
		//compare(3);
		$("#green").css("opacity", "0.75");
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 39){
		$("#green").css("opacity", "1");
	};
});


//down (4)
$(document).on("keydown keyup", function(e){
	if(e.keyCode == 40){
		//compare(4);
		$("#yellow").css("opacity", "0.75");
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 40){
		$("#yellow").css("opacity", "1");
	};
});



})();

// Enter: 13
// Up: 38
// Down: 40
// Right: 39
// Left: 37