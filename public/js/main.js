(function (){
"use strict";

//global variables
var sequence = [];
var playerChoice =[];
var iteration = 0;

//random number generator from 1-4
function randomNumber(){
	var number = parseInt(Math.random() * (5 - 1) + 1);
	sequence.push(number);
  console.log(sequence);
	boxSelected(sequence);
};

randomNumber();

 // runs through sequence array and changes opacity of boxes determined by number value
function boxSelected(input){
	for (var i = 0; i < input.length; i++){
		if (input[i] == 1) {
			$("#red").css("opacity", "0.75");
			setTimeout(function(){
				$("#red").css("opacity", "1");
			}, 1000);
		} else if(input[i] == 2) {
			$("#blue").css("opacity", "0.75");
			setTimeout(function(){
				$("#blue").css("opacity", "1");
			}, 1000);
		} else if(input[i] == 3) {
			$("#green").css("opacity", "0.75");
			setTimeout(function(){
				$("#green").css("opacity", "1");
			}, 1000);
		} else if(input[i] == 4) {
			$("#yellow").css("opacity", "0.75");
			setTimeout(function(){
				$("#yellow").css("opacity", "1");
			}, 1000);
		};
	};
};

function compare(input){
  if (iteration !== sequence.length) {
    if (sequence[iteration-1] == input ) {
      console.log("GOOD");
    }else {
      console.log("GAME OVER");
      sequence = [];
      iteration = 0;
    }
  }else {
    iteration = 0;
    randomNumber();
  }
}

//assigning the numbers to each keypress
//up (1)
$(document).on("keydown", function(e){
	if(e.keyCode == 38){
    console.log(e.keyCode);
		$("#red").css("opacity", "0.75");
    iteration++
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 38){
		$("#red").css("opacity", "1");
    compare(1);
	};
});

//left (2)
$(document).on("keydown", function(e){
	if(e.keyCode == 37){
    console.log(e.keyCode);
		$("#blue").css("opacity", "0.75");
    playerChoice.push(2);
    iteration++
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 37){
		$("#blue").css("opacity", "1");
    compare(2);
	};
});

//right (3)
$(document).on("keydown", function(e){
	if(e.keyCode == 39){
    console.log(e.keyCode);
		$("#green").css("opacity", "0.75");
    playerChoice.push(3);
    iteration++
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 39){
		$("#green").css("opacity", "1");
    compare(3);
	};
});


//down (4)
$(document).on("keydown", function(e){
	if(e.keyCode == 40){
    console.log(e.keyCode);
		$("#yellow").css("opacity", "0.75");
    playerChoice.push(4);
    iteration++;
	};
});
$(document).on("keyup", function(e){
	if(e.keyCode == 40){
		$("#yellow").css("opacity", "1");
    compare(4);
	};
});



})();

// Enter: 13
// Up: 38
// Down: 40
// Right: 39
// Left: 37
