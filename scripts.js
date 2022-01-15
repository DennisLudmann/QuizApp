
let questions= [{
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

function init(){

    document.getElementById('questions_counter').innerHTML = questions.length;
    displayQuestion();
}


function displayQuestion(){
    let question = questions[currentQuest];
    
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(choice){
    

}




function nextQuestion(){
    let currentQuest = currentQuest + 1;
    displayQuestion();

}