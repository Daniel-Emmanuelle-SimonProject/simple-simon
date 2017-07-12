(function (){
"use strict";

//global variables
var sequence = [];
var iteration = 0;
var count = 0;
var round = 1;
var speed = 1500;
var doc = $(document);

/************************ GAME FUNCTIONS ******************/
$("#tattoo").click(startGame);
function startGame(){
	randomNumber();
}
//random number generator from 1-4
function randomNumber(){
	disableEvents();
	var number = parseInt(Math.random() * (5 - 1) + 1);
	$('#round').html((round));
	if (round % 5 == 0) {
		speed -= 50;
	}else if (speed == 400 ) {
		speed = 350;
	}
	console.log("The round is: " + round);
	console.log("The count is: " + count);
	console.log("the speed is: " + speed);
	sequence.push(number);
  console.log(sequence);
	boxSelected(speed);
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
					},400);
					count++;
				}else if (sequence[count] == 2) {
					$('#leftArm').css('opacity','0')
					setTimeout(function(){
						$('#leftArm').css('opacity','1')
					},400);
					count++;
				}else if (sequence[count] == 3) {
					$('#rightArm').css('opacity','0')
					setTimeout(function(){
						$('#rightArm').css('opacity','1')
					},400);
					count++
				}else if (sequence[count] == 4) {
					$('#abs').css('opacity','0')
					setTimeout(function(){
						$('#abs').css('opacity','1')
					},400);
					count++
				}
			}else {
				attachEvents();
				clearInterval(changeOpacity);
				count = 0;
				console.log("All Done");
			}
		},speed)
	},1000);
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
			count = 0;
    }
  }else {
		round++;
    iteration = 0;
    randomNumber();
  }
}

//assigning the numbers to each keypress


function attachEvents(){
	$("#head").on('click',head)
	doc.on('keyup',upArrow)

	$("#leftArm").on('click',leftArm)
	doc.on('keyup',leftArrow)

	$("#rightArm").on('click',rightArm)
 	doc.on('keyup',rightArrow)

	$("#abs").on('click',abs)
	doc.on('keyup',downArrow)
}

function disableEvents(){
	doc.off('keyup');
	$("#head").off('click')
	$("#leftArm").off('click')
	$("#rightArm").off('click')
	$("#abs").off('click')
}

function upArrow(e){
		if(e.keyCode == 38){
			e.preventDefault();
			head();
		};
}

function leftArrow(e){
		if(e.keyCode == 37){
			e.preventDefault();
			leftArm();
		};
}

function rightArrow(e){
		if(e.keyCode == 39){
			e.preventDefault();
			rightArm();
		};
}

function downArrow(e){
		if(e.keyCode == 40){
			e.preventDefault();
			abs();
		};
}
function head(){
	$("#head").css("content", "url(/img/simon/simonHeadHit.gif)");
	iteration++;
	$("#head").css("content", "url(/img/simon/simonHead.gif)");
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
