/*
 Melodie Brewster
 WPF 1410 Section 02
 Go To Training Week 4
 10-22-2014
 */

var min = prompt("please type in a min number");
/*
//validate
while(min===""){
    min = prompt("please enter a number!!");
}
//not a number NaN.  checks to see if the value is a number
while(isNaN(min)){
    min = prompt("please enter a number!!");
}
*/
while(isNaN(min) || min===""){

    min = prompt("please enter a number!");
}

//set a var for the max number
var max = prompt("Please enter a max number");
//validating prompt to check if blank and if a number
while(isNaN(max) || max===""){

    max = prompt("please enter a number!!");

}
//call our function
//randomizer(5,20);
//call function using arguments (values) for min and max from our prompts
var result=randomizer(min,max);
//created a results variable to hold the returned value from our function randomizer.
console.log("The returned value is " + result);

//function to generate a random number between and min and max
function randomizer(minNumber,maxNumber){
//created var for random number. round out the number to a whole number (Math.round)
    //Math.random generates a nubmer between 0-1.  Multiplying by our max-min+min.
    var randomNumber = Math.round(Math.random()*(maxNumber-minNumber)+ Number(minNumber));
//returning our random number
    return randomNumber;
}

//create a loop to generate 15 random number from our function
//for loop (var; condition to met; increment)
//the loop to run 15 times
for(var i=0; i<15; i++){

    console.log(randomizer(min,max));
}