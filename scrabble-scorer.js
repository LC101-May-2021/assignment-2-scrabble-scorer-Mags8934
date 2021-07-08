// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
// Adding a pointless comment in attempt to push again

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let word = ''; 
function initialPrompt() {
  word = input.question("Let's play some Scrabble!\n\nEnter a word to score: ");
  return word;
};
// word = initialPrompt();

function oldScrabbleScorer() {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 };
console.log(oldScrabbleScorer(word));

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function simpleScore() {
  let simpleScoreValue = 0; 
    simpleScoreValue += Number(word.length); 
  return simpleScoreValue;
 };

function vowelBonusScore() {
	word = word.toLowerCase();
	let total = 0;
	for (let i = 0; i < word.length; i++) { 
    if (word[i].includes('a') || word[i].includes('e') || word[i].includes('i') || word[i].includes('o') || word[i].includes('u')){
      total += 3
    } else {
        total += 1 
          }
       }
	  return total;
	}

function scrabbleScore() {
  word = word.toLowerCase();
  let scrabbleScoreValue = 0;

  for (let i = 0; i < word.length; i++) {

    for (const thisLetter in newPointStructure) {

      if (thisLetter === word[i]) { 
        scrabbleScoreValue += newPointStructure[thisLetter]
      }
  }
  }
  return scrabbleScoreValue;
}


const scoringAlgorithms = [
  {
    name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction: simpleScore 
    },
  {
    name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble', description: 'The traditional scoring algorithm.', scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let userAlgorithmSelection = '';
  userAlgorithmSelection = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, 2: `);
    if (Number(userAlgorithmSelection) === 0) {
      console.log("Score for '" + word.toLowerCase() + "': " + simpleScore())
    } else if (Number(userAlgorithmSelection) === 1) {
        console.log("Score for '" + word.toLowerCase() + "': " + vowelBonusScore()) 
        } else if (Number(userAlgorithmSelection) === 2) {
            console.log("Score for '" + word.toLowerCase() + "': " + scrabbleScore()) 
            }
            return Number(userAlgorithmSelection);
            };



function transform() {
  let letter = {};
  for (let points in oldPointStructure) {
    for (let i in oldPointStructure[points])
      letter[oldPointStructure[points][i].toLowerCase()] = Number(points);
    }
    return letter;
  }


let newPointStructure = transform(oldPointStructure);
// console.log(newPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt();   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};