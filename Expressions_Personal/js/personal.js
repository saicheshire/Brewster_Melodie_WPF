/*
 Melodie Brewster
 WPF 1410 Section 02
 Assignment: Personal Expressions
 10-09-2014
 */

//Create a js file that calculates how many rats you should be able to fit in your cage.

//Ask the user their name
var name = prompt("Please type in your name:");

//Say hello to the user and let them know what we are doing
alert("Welcome "+name+"! We are going to figure out how many rats you should be able to fit in your cage.");

//Ask the user how long the cage is in inches.
//Create a variable for the answer.
var length = prompt("How many inches long is the cage?");

//Console.log the response
console.log(length);

//Ask the user how wide the cage is in inches.
//Create a variable for the answer.
var width = prompt("How many inches wide is the cage?");

//Console.log the response
console.log(width);

//Ask the user how tall the cage is in inches.
//Create a variable for the answer.
var height = prompt("How many inches tall is the cage?");

//Console.log the response
console.log(height);

//Calculate how many cubic inches the cage is
//Create variables for our calculation.
var cubicInches = length * width * height;

//Console.log the total
console.log(cubicInches);