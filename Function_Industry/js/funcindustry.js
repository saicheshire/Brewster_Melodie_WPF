/*
 Melodie Brewster
 WPF 1410 Section 02
 Functions Assignment - Industry
 10-23-2014
 */

//Calculate an estimate on how much it will cost to create a website for a client
//create variable for hours spent on each page
var perPage = prompt("How many hours on average does it take for you to finish each page?");

//validate response, badger them for a number if you have to
while(isNaN(perPage) || perPage===""){

    perPage = prompt("please enter a number!");
}

//create a variable for how much you charge
var perHour = prompt("How much do you charge per hour?");

//validate response, again badger if needed
while(isNaN(perHour) || perHour===""){

    perHour = prompt("please enter a number!");
}

//create variable for the total number of pages you'll be creating
var totalPages = prompt("How many pages are there going to be on the website?");

//validate
while(isNaN(totalPages) || totalPages===""){

    totalPages = prompt("please enter a number!");
}

//call the function
var totalCost = calculateTotal(perPage,perHour,totalPages);
console.log("It will cost your client around" + "$" + totalCost + " to create their website.");
alert("It will cost your client around" + " $" + totalCost + " to create their website.");

//create function
function calculateTotal(perPage,perHour,totalPages){
    return perPage * totalPages * perHour;
}
