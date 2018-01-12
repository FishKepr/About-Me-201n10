'use strict';
//  This JavaScript asks a series of questions about me.

var answersWrong = 0;

//Get the user's Name
var user = prompt('Hello User!  What is your name?');
console.log('The user\'s name is ' + user);
alert('Hello there ' + user + '. It\s nice to meet you.');
    
//Warn the user about the questions
alert(user + '. Let’s see if you can guess a few things about me.  Is that OK?  If not, too bad. we’re going to do it anyway.');

//Question 1:  Children
var userIsRight = false;
while (userIsRight == false) {
    var answer = prompt(user + ", Do you think I have any children?    Enter Yes or No (Y or N is OK too):").toUpperCase();
    if (answer == 'YES' || answer == 'Y') {
        console.log('The user answered that I have a child.'); 
        alert(user + '. That is right!  I have one child');
        userIsRight = true;
    } else {
        console.log('The user answered that I do NOT have a child. Total Wrong: ' + answersWrong);  
        alert(user + '. That is not correct!  Sorry, try again.');
        answersWrong++
   }
}

//Question 2:  pets
userIsRight = false;
while (userIsRight == false) {
    var answer = prompt(user + ", Do you think I have any pets?    Enter Yes or No (Y or N is OK too):").toUpperCase();
    if (answer == 'YES' || answer == 'Y') {
        console.log('The user answered that I have a child.'); 
        alert(user + '. That is right!  I have one lots of pets');
        userIsRight = true;
    } else {
        console.log('The user answered that I do NOT have any pets. Total Wrong: ' + answersWrong); 
        alert(user + '. That is not correct!  Sorry, try again.');
        answersWrong++
   }
}

//Question 3:  Puget Sound
userIsRight = false;
while (userIsRight == false) {
    var answer = prompt(user + ", Do you think I live in Puget Sound?    Enter Yes or No (Y or N is OK too):").toUpperCase();
    if (answer == 'YES' || answer == 'Y') {
        console.log('The user answered that I live in Puget Sound.'); 
        alert(user + '. That is right!  \(Yeah, that was not difficult was it?\)');
        userIsRight = true;
    } else {
        console.log('The user answered that I do NOT live in Puget Sound. Total Wrong: ' + answersWrong); 
        alert(user + '. That is not correct!  Sorry, try again.');
        answersWrong++
   }
}


//Question 4:  Play Outside
userIsRight = false;
while (userIsRight == false) {
    var answer = prompt(user + ", Do you think I like to \‘Play Outside\’ as WDFW says?    Enter Yes or No (Y or N is OK too):").toUpperCase();
    if (answer == 'YES' || answer == 'Y') {
        console.log('The user answered that I live in Puget Sound.'); 
        alert(user + '. That is right!  Hmmm, identifying WDFW probably gave that one away…');
        userIsRight = true;
    } else {
        console.log('The user answered that I do NOT like to play outside.  Total Wrong: ' + answersWrong); 
        alert(user + '. That is not correct!  Sorry, try again.');
        answersWrong++
   }
}

//Question 5:  Fishing
userIsRight = false;
while (userIsRight == false) {
    var answer = prompt(user + ", Do you think I like to go fishing?    Enter Yes or No (Y or N is OK too):").toUpperCase();
    if (answer == 'YES' || answer == 'Y') {
        console.log('The user answered that I like to go fishing.'); 
        alert(user + '. That is right!  Yeah, there’s that WDFW reference again.');
        userIsRight = true;
    } else {
        console.log('The user answered that I do NOT like to play outside.  Total Wrong: ' + answersWrong); 
        alert(user + '. That is not correct!  Sorry, try again.');
        answersWrong++
   }
}

// Exit dialog.  If we are here, the user got everything right.
console.log('The user answered wrong: ' + answersWrong); 

alert(user + '. you got them all right!  Code Fellows TAs are so smart!');

if (answersWrong > 0) {
    alert('Of course, you got ' + answersWrong + ' along the way ' + user + '.');
}