/*
 Melodie Brewster
 WPF 1410 Section 02
 Assignment: Expressions (Industry)
 10-09-2014
 */

//Create a js file that will tell you how far to move the yellow corner on an information bubble from one icon to another when mousing over the icon.

//Ask the user the total width (in pixels) of all the icons added together.
//For example, you are adding icons for Facebook, Twitter, LinkedIn, and E-mail.  How many inches wide are they when added together?
//The smallest icon size is 16x16 pixels.  4 icons plus 2 pixels in between each icon is 70 pixels
//Create a variable to ask for the total width and catch their answer

var totalWidth = prompt("How many pixels wide is your icon bar?");

//Console.log out the response
console.log(totalWidth);

//Ask user how many pixels wide is each icon
//Create a variable to show answer

var iconPixels = prompt("How many pixels wide is each icon");

//Console.log the response
console.log(iconPixels);

//Ask the user which icon they want to point to
//Create a variable to show the answer

var whichIcon = prompt("Numbered from left to right, which icon do you want the arrow to point to?");

//Console.log the response
console.log(whichIcon);

//Calculate how many pixels to move the arrow

var moveTo = totalWidth - iconPixels * whichIcon;

//Alert user with the answer
alert("You need to move the arrow "+moveTo+" pixels to the right.");

//Console.log the answer
console.log(moveTo);