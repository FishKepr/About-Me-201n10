'use strict';

var answersWrong = 0;

//Get the user's Name
var user = prompt('Hello User!  What is your name?');
console.log('The user\'s name is ' + user);
alert('Hello there ' + user + '. It\s nice to meet you.');
    
//Warn the user about the questions
alert(user + '. Let’s see if you can guess a few things about me.  Is that OK?  If not, too bad. we’re going to do it anyway.');

//Question 1
var userIsRight = false;
while (userIsRight == false) {
        var answer = prompt(user + ", Do you think I have any children?  Enter a number from 0 to 5:");
        console.log('The user thinks I have ' + answer + ' children'); 
        if (answer == 1) {
            alert(user + '. That is right!  I have one child');
        } else {
            if (answer > 5) {
                alert(user + '. I\'m not a golden retreiver.  Try again.');
                answersWrong++
            } else {
                alert(user + '. That is not correct!  Sorry, try again.');
                answersWrong++
            }
        }
}

//Question 1
var userIsRight = false;
while (userIsRight == false) {
        var answer = prompt(user + ", Do you think I have any children?  Enter a number from 0 to 5:");
        console.log('The user thinks I have ' + answer + ' children'); 
        if (answer == 1) {
            alert(user + '. That is right!  I have one child');
        } else {
            alert(user + '. That is right!  I have one child');
        }
}



    alert(resturantKind + ' food is good eats ' + user + '.');

var resturant = prompt(user + ", what is your favorite " + resturantKind + " resturant?");
console.log('The user\'s favorite resturant is ' + resturant);
alert(resturant + ' is a nice place to go for ' + resturantKind + ' food ' + user + '.');

var allergies = prompt(user + ', This is a yes/no question, so please answer with Y or N.  Do you have any allergies that you need to wary of when you go to ' + resturant + ' for ' + resturantKind + ' food?');
console.log('The user\'s allergy status is ' + allergies);

if (allergies === 'N' || allergies === 'n') {
    alert ("That's good " + user + ". You should not have any problems going to " + resturant + ' for ' + resturantKind  + ' food then.');
}
else {
    alert ('Oh Dear ' + user + '.  You better make sure that ' + resturant + ' does not serve anything you are allergic to when you go there for ' + resturantKind + ' food!');
}