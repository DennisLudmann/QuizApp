
let questions = [{
	"question": "What is the capital of Italy?",
	"answer_1": "Madrid",
	"answer_2": "Paris",
	"answer_3": "Rome",
	"answer_4": "St. Petersburg",
	"right_answer": "3"
},
{
	"question": " What is the population of Italy?",
	"answer_1": "30 million.",
	"answer_2": "60 million.",
	"answer_3": "90 million.",
	"answer_4": "120 million.",
	"right_answer": "2"
},
{
	"question": "How many active volcanoes are there in Italy?",
	"answer_1": "0",
	"answer_2": "1",
	"answer_3": "2",
	"answer_4": "3",
	"right_answer": "4"
},
{
	"question": "In what Italian city was pizza invented?",
	"answer_1": "Naples",
	"answer_2": "Pisa",
	"answer_3": "Rome",
	"answer_4": "Bologna",
	"right_answer": "1"
},
{
	"question": "If someone said 'Addio,' what would they mean?",
	"answer_1": "Goodflight",
	"answer_2": "Goodbye",
	"answer_3": "Adidasshoes",
	"answer_4": "Adi do it!",
	"right_answer": "2"
},

];

let currentQuest = 0;

function init() {

	document.getElementById('questions_counter').innerHTML = questions.length;	// zeigt die Gesamtanzahl der Fragen an
	displayQuestion();
}


function displayQuestion() {

	if (currentQuest >= questions.length)
		// END SCREAN
} else {

	let question = questions[currentQuest]; // questions ist oben das Json - currentQuestion ist global auf 0

	document.getElementById('questions_counter_start').innerHTML = currentQuest + 1;
	document.getElementById('question_text').innerHTML = question['question'];
	document.getElementById('answer_1').innerHTML = question['answer_1'];
	document.getElementById('answer_2').innerHTML = question['answer_2'];
	document.getElementById('answer_3').innerHTML = question['answer_3'];
	document.getElementById('answer_4').innerHTML = question['answer_4'];

}
}
function answer(choice) {	// ein Parameter wird in die funktion übergeben 'answer_x'

	let question = questions[currentQuest];					// currentQuestion ist am Anfang 0

	console.log('selected answer is', choice)				// loggt den übergebenen Parameter

	let selectedAnswerNumber = choice.slice(-1);			// gibt die letzte Ziffer vom übergebenen Parameter

	let idOfRightAnswer = `answer_${question['right_answer']}`; // erkennt welche die Richtige Antwort ist

	if (selectedAnswerNumber == question['right_answer']) {// wenn die letzte Ziffer vom übergebenen Parameter == der richtigen Antwort ist dann "if"
		document.getElementById(choice).classList.add('bg-success');

	} else {												// wenn sie nicht == ist dann "else"
		document.getElementById(choice).classList.add('bg-danger');				// rot makiert weil antwort falsch ist
		document.getElementById(idOfRightAnswer).classList.add('bg-success'); // makiert die Richtige Antwort, wenn eine falsche gewählt wurde
	}

	document.getElementById('next-button').disabled = false;

}




function nextQuestion() {
	currentQuest++; 	// erhöht den wert von currentquest um 1
	displayQuestion();	//	es wird auf das nächste elemnt im Json zugegriffen 

	document.getElementById('next-button').disabled = true;

	HideResults();

}

function HideResults() {

	document.getElementById('answer_1').classList.remove('bg-danger');
	document.getElementById('answer_1').classList.remove('bg-success');
	document.getElementById('answer_2').classList.remove('bg-danger');
	document.getElementById('answer_2').classList.remove('bg-success');
	document.getElementById('answer_3').classList.remove('bg-danger');
	document.getElementById('answer_3').classList.remove('bg-success');
	document.getElementById('answer_4').classList.remove('bg-danger');
	document.getElementById('answer_4').classList.remove('bg-success');

}
