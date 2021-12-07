

function result() {
	let score = 0; 
	if (document.getElementById("correct1").checked)
	{ 
		score++;
	} 
	if (document.getElementById("correct2").checked)
	{
		score++;
	}
	if (document.getElementById("correct3").checked)
	{
		score++;
	}
	if (document.getElementById("correct4").checked)
	{
		score++; 
	}
	document.write("Correct Answers: 1 - Steven Spielberg 2 - 'Rosebud' 3 - Shirley Henderson (Moaning Myrtle) 4 - Joker. Your score is:"+score); 
} 