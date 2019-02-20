var correctAnswer = 0;
var answer;

answer = prompt("PPAP I have a ____");

if (answer.toUpperCase() === "PEN") {
    correctAnswer +=1;
    answer = "";
}

answer = prompt("I have an ___");

if (answer.toUpperCase() === "APPLE"){
    correctAnswer +=1;
    answer = "";
}

answer = prompt("Uh! ______");

if (answer.toUpperCase() === "APPLEPEN"){
    correctAnswer +=1;
    answer = "";
}

answer = prompt("I have a ____");

if (answer.toUpperCase() === "PEN") {
    correctAnswer +=1;
    answer = "";
}

answer = prompt("I have ___");

if (answer.toUpperCase() === "PINEAPPLE"){
    correctAnswer +=1;
    answer = "";
}

answer = prompt("Uh! _____");

if (answer.toUpperCase() === "PINEAPPLEPEN"){
    correctAnswer +=1;
    answer = "";
}

document.write("<p>You got "+ correctAnswer +" question(s) right!</p>")

if (correctAnswer === 6){
    document.write("<p>You win the gold crown!</p>");
}   else if (correctAnswer>=3) {
    document.write("<p>You win the silver crown!</p>");
}   else if (correctAnswer>=1) {
    document.write("<p>You win the bronze crown!</p>");
} else {
    document.write("<p>Better luck next time!</p>");
}


