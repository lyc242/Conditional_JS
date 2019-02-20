var correctAnswer = 0;
var answer;

answer = prompt("PPAP I have a ____");

if (answer.toUpperCase() === "PEN") {
    correctAnswer +=1;
}

answer = prompt("I have an ___");

if (answer.toUpperCase()=== "APPLE"){
    correctAnswer +=1;
}

answer = prompt("Uh! ______");

if (answer.toUpperCase() === "APPLEPEN" || "APPLE PEN" || "APPLE-PEN"){
    correctAnswer +=1;
}

answer = prompt("I have a ____");

if (answer.toUpperCase() === "PEN") {
    correctAnswer +=1;
}

answer = prompt("I have ___");

if (answer.toUpperCase() === "PINEAPPLE"){
    correctAnswer +=1;
}

if (answer.toUpperCase() === "PINEAPPLEPEN" || "PINEAPPLE PEN" || "PINEAPPLE-PEN"){
    correctAnswer +=1;
}

document.write("<p>You got "+correctAnswer+" question(s) right!</p>")

if (correctAnswer === 6){
    document.write("<p>You win the gold crown!</p>")
}

