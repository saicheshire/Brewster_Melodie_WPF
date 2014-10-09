/*
Melodie Brewster
WPF 1410 Section 02
Go To Training Week 2
10-09-2014
 */

//alert("Testing 1,2,3");

//Create a js file that will tell us how old we are

//Ask the user their name
var name = prompt("Please type in your name:");

//Say hello to the user and let them know what we are doing
//ALERT the user
alert("Welcome "+name+"! Let's go ahead and figure out how old you are.");


//Ask the user what year they were born in
//Create a variable to catch their answer

var yearBorn = prompt("What year were you born?");

//Console.log out the response
console.log(yearBorn);

//Current Year and subtract the year they were born

//Create a variable for the current year

var currentYear = 2014;

//Calculate the age
var age = currentYear - yearBorn;

//Alert user with their age
alert(name+" you are "+age+" years old.");