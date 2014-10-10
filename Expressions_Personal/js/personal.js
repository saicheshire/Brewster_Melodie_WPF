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

//Calculate cubic inches into cubic feet
//Cubic feet is measured by multiplying the height * width * depth, then dividing that total by the number of cubic inches in a cubic foot.
//A cubic foot is 12 * 12 * 12 = 1728
var cubicFeet = cubicInches / 1728;

//Console.log the total
console.log(cubicFeet);

//Calculate the number of rats the cage can hold.
//Each rat requires 2 cubic feet of space.
//Create a variable for the calculation
var totalRats = cubicFeet / 2;

//Console.log the total
console.log(totalRats);

//Tell the user the results
console.log("Your cage can hold up to "+totalRats+" rats.");
alert("Your cage can hold up to "+totalRats+" rats.");