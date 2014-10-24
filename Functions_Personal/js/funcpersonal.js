/*
 Melodie Brewster
 WPF 1410 Section 02
 Functions Assignment - Personal
 10-23-2014
 */

//We're going to calculate how often we need to buy a bag of dog food
//set a variable for cups per day fed
var cupsDay = prompt("How many cups do your dog/dogs eat per day?  Please enter amounts in decimals (i.e. 1 1/2 cups is 1.25).");

//validate response, keep asking until a number is provided
while(isNaN(cupsDay) || cupsDay===""){

    cupsDay = prompt("please enter a number!");
}

//set a variable for size of the bag of food
var foodBag = prompt("How many pounds does the bag weigh?");

//validate response, keep asking until a number is provided
while(isNaN(foodBag) || foodBag==="") {

    foodBag = prompt("please enter a number!");
}

//set variable for total days the dog food bag will last
var totalDays = calculateTotal(cupsDay,foodBag);
console.log("You need to buy a bag of dog food every " + totalDays + " days.");
alert("You need to buy a bag of dog food every " + totalDays + " days.");

//create function
function calculateTotal(cupsDay,foodBag){
    return foodBag * 4 / cupsDay;
}
