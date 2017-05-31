	var startButton = document.querySelector("#startButton"); 		
	function gameStart(){
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		var wrongGuessArray = [];
		  		
		
		document.onkeyup = function(onclick){
			var compGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var totalWins = document.querySelector("#wins");
			var totalLosses = document.querySelector("#losses");
			var leftGuesses = document.querySelector("#leftGuesses");
			var wrongLetters = document.querySelector("#wrongLetters");
			var userGuess = event.key.toLowerCase();
			console.log (userGuess);
			
			var computerGuess = compGuess[Math.floor(Math.random() * compGuess.length)];
			console.log(computerGuess);
			if (userGuess.length == 1){
				if (userGuess == computerGuess){
					wins++;					
					totalWins.textContent = "Wins: " + wins;
					alert("Congratulations! You won");
					restartGame();
				} 	
				else if(wrongGuessArray.indexOf(userGuess) ===-1 && guessesLeft > 0){
						alert("Oh no! You guess is incorrect");
						guessesLeft--;
						leftGuesses.textContent = "Guesses Left: " + guessesLeft;
						wrongGuessArray.push(userGuess);
						compGuess.textContent = "computerGuess:" + computerGuess;
						wrongLetters.textContent = "Your guesses so far: " + wrongGuessArray.join(", ").toUpperCase();
						console.log(wrongLetters);
						}
				else if(guessesLeft ==0){
						losses++;
						totalLosses.textContent = "Losses: " + losses;
						alert("Sorry! You Lost");
						restartGame();
					} 
			
			}

		};
		
	};
    document.onclick = function restartGame() {
		    
		    alert("Are you ready to play? Lets get started! Enter a Character");
		    guessesLeft = 10;
		    wrongGuessArray = [];
		   // guessesLeft.textContent = "Guesses left: " + guessesLeft;
		   // wrongLetters.textContent = "Your guesses so far: " + wrongGuessArray;
		    gameStart();
		};
	