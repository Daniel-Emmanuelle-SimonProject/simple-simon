(function (){
"use strict";

//global variables
var sequence = [];
var iteration = 0;
var count = 0;
var doc = $(document);

/************************ GAME FUNCTIONS ******************/
$("#tattoo").click(startGame);
function startGame(){
	randomNumber();
	setTimeout(attachEvents,2000)
}
//random number generator from 1-4
function randomNumber(){
	var number = parseInt(Math.random() * (5 - 1) + 1);
	$('#round').html((count + 1));
	sequence.push(number);
  console.log(sequence);
	boxSelected(sequence);
};




 // runs through sequence array and changes opacity of boxes determined by number value
function boxSelected(){
	setTimeout(function(){

		var changeOpacity = setInterval(function(){
			if (count < sequence.length) {
				if (sequence[count] == 1) {
					$('#head').css('opacity','0')
					setTimeout(function(){
						$('#head').css('opacity','1')
					},1000);
					count++;
				}else if (sequence[count] == 2) {
					$('#rightArm').css('opacity','0')
					setTimeout(function(){
						$('#rightArm').css('opacity','1')
					},1000);
					count++;
				}else if (sequence[count] == 3) {
					$('#leftArm').css('opacity','0')
					setTimeout(function(){
						$('#leftArm').css('opacity','1')
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
	},1500);
}

function compare(input){
	console.log('--- compare! ---');
	console.log('input: ' + input);
	console.log('sequence: ' + sequence + ' length: ' + sequence.length);
	console.log('iteration: ' + iteration);
  if (iteration <sequence.length) {
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


function attachEvents(){
	$("#head").on('click',head)
	doc.on('keyup',upArrow)

	$("leftArm").on('click',leftArm)
	doc.on('keyup',leftArrow)

	$("#rightArm").on('click',rightArm)
 	doc.on('keyup',rightArrow)

	$("#abs").on('click',abs)
	doc.on('keyup',downArrow)
}

function upArrow(e){
	e.preventDefault();
		if(e.keyCode == 38){
			head();
		};
}

function leftArrow(e){
		e.preventDefault();
		if(e.keyCode == 37){
			leftArm();
		};
}

function rightArrow(e){
		e.preventDefault();
		if(e.keyCode == 39){
			rightArm();
		};
}

function downArrow(e){
		e.preventDefault();
		if(e.keyCode == 40){
			abs();
		};
}
function head(){
	$("#head").css("opacity", "0.75");
	iteration++;
	$("#head").css("opacity", "1");
	compare(1);
}

function leftArm(){
	$("#leftArm").css("opacity", "0.75");
	iteration++;
	$("#leftArm").css("opacity", "1");
	compare(2);
}

function rightArm(){
	$("#rightArm").css("opacity", "0.75");
	iteration++;
	$("#rightArm").css("opacity", "1");
	compare(3);
}
function abs(){
	$("#abs").css("opacity", "0.75");
	iteration++;
	$("#abs").css("opacity", "1");
	compare(4);
}



})();

// Enter: 13
// Up: 38
// Down: 40
// Right: 39
// Left: 37
