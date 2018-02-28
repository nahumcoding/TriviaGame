// create variables/put all variables together for reset function.

$(document).ready(function() {

	var correct = 0;
	var incorrect = 0;
	var time = 30;



	var display = function() {
		$("#timer").text(time);
		$("#correct").text(correct);
		$("#incorrect").text(incorrect);
	};

	var reset = function() {
		correct = 0;
		incorrect = 0;
		time = 30;
		display();

		
	};


	var checkAnswer = function() {
		clearInterval(x);
		
		for(var i = 1; i <= 5; i++) {
			var answer = $("input[name=q" + i + "]:checked").val();
			console.log(typeof answer);

			if (answer === "true") {
				correct++;
			}
			else {
				incorrect++;
			};

		};	
		display();
	};


	$("#btn2").on("click", reset);
	console.log("message");

	$("#btn").on("click", checkAnswer);

//timer
var x = setInterval(function(){

	time--;
	$("#timer").text(time);
	if (time === 0) {
		
		checkAnswer();
	};
},1000)



});