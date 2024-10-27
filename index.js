/*EXERCISE 1: Guess the random number 

Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. */



function guessNumberGame() {
    // Gives a random number between 1 and 10
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let guess = false; //or null

    // Creates a loop that goes on until the user guesses correctly
    while (guess !== targetNumber) {
        // Prompt the user for a guess and makes sure its a number
        guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);

        // If the guess is not a valid number, ask for a new guess
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            console.log ("Invalid number: " + guess ," try again"); 
        //if the guess is too low or too high, ask for a new guess
        } else if (guess < targetNumber) {
            alert("Too low! Try again.");
            console.log ("Number guessed: " + guess ," try again"); 
        } else if (guess > targetNumber) {
            alert("Too high! Try again.");
            console.log ("Number guessed: " + guess ," try again"); 
        //if the guess is correct, end the loop and congratulate the user
        } else {
            alert("Congratulations! You've guessed the number!");
            console.log ("Number guessed: " + guess ," Correct! You won!"); 
        }
    }
}

// Runs the function to start the game
guessNumberGame();
