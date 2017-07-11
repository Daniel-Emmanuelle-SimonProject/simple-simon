(function (){
"use strict";

//global variables
var sequence = [];
var iteration = 0;
var count = 0;
var doc = $(document)

/************************ GAME FUNCTIONS ******************/

function startGame(){
	randomNumber();
	setTimeout(attachEvents,2000)
}
//random number generator from 1-4
function randomNumber(){
	var number = parseInt(Math.random() * (5 - 1) + 1);
	sequence.push(number);
	boxSelected(sequence);
};
 // runs through sequence array and changes opacity of boxes determined by number value
function boxSelected(){
	var changeOpacity = setInterval(function(){
		if (count < sequence.length) {
				if (sequence[count] == 1) {
					$('#head').css('opacity','0')
					setTimeout(function(){
						$('#head').css('opacity','1')
					},1000);
					count++;
				}else if (sequence[count] == 2) {
					$('#leftArm').css('opacity','0')
					setTimeout(function(){
						$('#leftArm').css('opacity','1')
					},1000);
					count++;
				}else if (sequence[count] == 3) {
					$('#rightArm').css('opacity','0')
					setTimeout(function(){
						$('#rightArm').css('opacity','1')
					},1000);
					count++
				}else if (sequence[count] == 4) {
					$('#abs').css('opacity','0')
					setTimeout(function(){
						$('#abs').css('opacity','1')
					},1000);
					count++
				}
		}else {
			clearInterval(changeOpacity);
			count = 0;
			console.log("All Done");
		}
	},1600)
}

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

/******************** EVENT LISTENERS *****************/
//assigning the numbers to each keypress

function attachEvents(){
	doc.on('keydown',upArrow)
	doc.on('keyup',upArrow)

	doc.on('keydown',leftArrow)
	doc.on('keyup',leftArrow)

	doc.on('keydown',rightArrow)
 	doc.on('keyup',rightArrow)

	doc.on('keydown',downArrow)
	doc.on('keyup',downArrow)
}

function upArrow(e){
		if(e.keyCode == 38){
			console.log(e.keyCode);
			$("#head").css("opacity", "0.75");
			iteration++
		};
		if(e.keyCode == 38){
			$("#head").css("opacity", "1");
			compare(1);
		};
}

function leftArrow(e){

		if(e.keyCode == 37){
			console.log(e.keyCode);
			$("#leftArm").css("opacity", "0.75");
			iteration++
		};
		if(e.keyCode == 37){
			$("#leftArm").css("opacity", "1");
			compare(2);
		};
}

function rightArrow(e){

		if(e.keyCode == 39){
			console.log(e.keyCode);
			$("#rightArm").css("opacity", "0.75");
			iteration++
		};
		if(e.keyCode == 39){
			$("#rightArm").css("opacity", "1");
			compare(3);
		};
}

function downArrow(e){

		if(e.keyCode == 40){
			console.log(e.keyCode);
			$("#abs").css("opacity", "0.75");
			iteration++;
		};
		if(e.keyCode == 40){
			$("#abs").css("opacity", "1");
			compare(4);
		};
}



})();

// Enter: 13
// Up: 38
// Down: 40
// Right: 39
// Left: 37
