let gamenumber = 32;
let guessnumber = prompt("welcome to the guessing game! guess a number between 1 and 50");
let x = 0
while (guessnumber != gamenumber) {
    ++x;
    guessnumber = prompt("Sorry, that's not correct. Try again. Attempt number :"+ x );    
}    
alert("Congratulations! You guessed the number correctly.");