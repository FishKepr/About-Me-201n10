'use strict';
//  This JavaScript asks a series of yes/no questions about me.

var answersRight = 0;
var answersWrong = 0;
var user = '';

//Get the user's Name
function askUserName() {
  user = prompt('Hello User!  What is your name?');
  console.log('The user\'s name is ' + user);
  alert('Hello there ' + user + '. It\'s nice to meet you.');

  //Warn the user about the questions
  alert(user + ', let\'s see if you can guess a few things about me.  Is that OK?  If not, too bad. We\'re going to do it anyway.');
}

//Question 1:  Children
function askChildren() {
  var answer = prompt(user + ', Do you think I have any children?    Enter Yes or No (Y or N is OK too):').toUpperCase();
  if (answer === 'YES' || answer === 'Y') {
    console.log('The user answered that I have a child.');
    alert(user + ', that is right!  I have one child');
    answersRight++;
  } else {
    alert(user + ', that is not correct!');
    answersWrong++;
    console.log('The user answered that I do NOT have a child. Total Wrong: ' + answersWrong);
  }
}

//Question 2:  pets
function askPets(){
  var answer = prompt(user + ', Do you think I have any pets?  Enter Yes or No (Y or N is OK too):').toUpperCase();
  if (answer === 'YES' || answer === 'Y') {
    console.log('The user answered that I have a pet.');
    alert(user + ', that is right!  I have lots of pets');
    answersRight++;
  } else {
    alert(user + ', that is not correct!');
    answersWrong++;
    console.log('The user answered that I do NOT have any pets. Total Wrong: ' + answersWrong);
  }
}

//Question 3:  Puget Sound
function askPuget(){
  var answer = prompt(user + ', Do you think I live in Puget Sound?    Enter Yes or No (Y or N is OK too):').toUpperCase();
  if (answer === 'YES' || answer === 'Y') {
    console.log('The user answered that I live in Puget Sound.');
    alert(user + ', that is right!  (Yeah, that was not difficult was it?)');
    answersRight++;
  } else {
    alert(user + ', that is not correct!');
    answersWrong++;
    console.log('The user answered that I do NOT live in Puget Sound. Total Wrong: ' + answersWrong);
  }
}

//Question 4:  Play Outside
function askPlayOutside(){
  var answer = prompt(user + ', Do you think I like to \'Play Outside\' as WDFW says?    Enter Yes or No (Y or N is OK too):').toUpperCase();
  if (answer === 'YES' || answer === 'Y') {
    console.log('The user answered that I like to play outside.');
    alert(user + ', that is right!  Hmmm, identifying WDFW probably gave that one away.');
    answersRight++;
  } else {
    alert(user + ', that is not correct!');
    answersWrong++;
    console.log('The user answered that I do NOT like to play outside.  Total Wrong: ' + answersWrong);
  }
}

//Question 5:  Fishing
function askFishing() {
  var answer = prompt(user + ', Do you think I like to go fishing?    Enter Yes or No (Y or N is OK too):').toUpperCase();
  if (answer === 'YES' || answer === 'Y') {
    console.log('The user answered that I like to go fishing.');
    alert(user + ', that is right!  Yeah, there\'s that WDFW reference again.');
    answersRight++;
  } else {
    alert(user + ', that is not correct!');
    answersWrong++;
    console.log('The user answered that I do NOT like to go fishing.  Total Wrong: ' + answersWrong);
  }
}

//Question 6:  Number of Pets
var numGuesses = 0;
var question6right = false;

function askNonAquaticPets() {
  while (question6right === false && numGuesses < 4) {
    do {
      var answer = prompt(user + ', how many non-aquatic pets do you think I have? (Enter a number):');
    } while (isNaN(answer));

    if (parseInt(answer) === 4) {
      console.log('The user answered that I have four non-aquatic pets.');
      alert(user + ', that is right!  I have 2 cats, 1 dog and 1 angry bird.');
      question6right = true;
      answersRight++;
    } else {
      if (parseInt(answer) < 4) {
        alert(user + ', that is too low!  You get four total guesses.');
      } else {
        alert(user + ', that is too high!  You get four total guesses.');
      }
      numGuesses++;
      console.log('The user answered that I do NOT have 4 pets.  Guess Number: ' + numGuesses);
    }
  }
  if (question6right === false) {
    alert(user + ', Sorry! You only get four chances.','Time to move on.');
    answersWrong++;
  }
}

//Question 7:  Movies
function askFavDisney(){
  var q7answers = ['Zootopia', 'Inside Out', 'WALL-E', 'WALL•E', 'Bolt', 'Ratatouille'];
  var numGuesses = 0;
  var question7right = false;

  while (question7right === false && numGuesses < 6) {
    var answer = prompt(user + ', Can you guess one of my favorite Disney/Pixar movies?','Hint: One is about a society of animals.').toLowerCase();
    console.log('The user guessed:  ' + answer);
    for (var i=0; i<q7answers.length; i++) {
      if (answer === q7answers[i].toLowerCase()) {
        question7right = true;
      }
    }
    if (question7right === true) {
      alert(user + ', that is right!',' (There are so many good ones.)');
      answersRight++;
    } else {
      alert(user + ', that is not correct!  You get six guesses.');

      numGuesses++;
      console.log('The user answered: ' + answer + ' Guess Number: ' + numGuesses);

    }
  }

  if (question7right === false) {
    alert(user + ', Sorry! You only get six chances. ','We\'re done.');
    answersWrong++;
  }
  alert(user + ', The possible answers were: '+ q7answers);
}

askUserName();
askChildren();
askPets();
askPuget();
askPlayOutside();
askFishing();
askNonAquaticPets();
askFavDisney();

// Exit dialog.  ...
console.log('The number questions user answered right: ' + answersRight);
console.log('The number questions user answered wrong: ' + answersWrong);

alert('You got ' + answersRight + ' questions right and ' + answersWrong + ' questions wrong ' + user + '.');

switch (answersRight) {
case 7:
  alert('You got them all right ' + user + '! Code Fellows TAs are so smart!');
  break;
case 0:
  alert('You didn\'t get any any questions right ' + user + '.  Try again some other time.');
  break;
}