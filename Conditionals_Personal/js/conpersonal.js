/*
 Melodie Brewster
 WPF 1410 Section 02
 Assignment Week 3: Conditionals - Personal
 10-16-2014
 */

//Decide whether I should take my dogs for a walk, pending the temperature

//Create variables to determine the current temperature
var currentTemp = prompt("What is the temperature outside?");

//Console log the current temperature
console.log(currentTemp);

//validate prompt
if (currentTemp === "") { //if the current temperature is left blank, then re prompt

    name = prompt("Please enter the current temperature.  Don't leave it blank!");
}

//Create a variable to determine your minimum temperature
var minTemp = prompt("What temperature is too cold for you to want to walk your dogs?");

//Console log the minimum temperature
console.log(minTemp);

//validate prompt
if (minTemp === "") { //if the current temperature is left blank, then re prompt

    name = prompt("Please enter the minimum temperature.  Don't leave it blank!");
}

//Create a variable to determine your maximum temperature
var maxTemp = prompt("What temperature is too hot for you to want to walk your dogs?");

//Console log the maximum temperature
console.log(maxTemp);

//validate prompt
if (maxTemp === "") { //if the current temperature is left blank, then re prompt

    name = prompt("Please enter the maximum temperature.  Don't leave it blank!");
}
