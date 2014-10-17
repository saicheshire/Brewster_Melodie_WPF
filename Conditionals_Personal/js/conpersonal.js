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

//Create a variable to determine your maximum temperature
var maxTemp = prompt("What temperature is too hot for you to want to walk your dogs?");

//Console log the maximum temperature
console.log(maxTemp);

//validate prompt
if (maxTemp === "") { //if the current temperature is left blank, then re prompt

    name = prompt("Please enter the maximum temperature.  Don't leave it blank!");
}

//Create if statement to evaluate whether you should walk your dogs
if (currentTemp < maxTemp) {

console.log("It sounds like you're taking your dogs for a walk.");
alert("It sounds like you're taking your dogs for a walk.");

}else {

console.log("It's too hot for both you and your dogs to walk today.");
alert("It's too hot for both you and your dogs to walk today.");

}
