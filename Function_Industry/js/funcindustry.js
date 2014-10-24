/*
 Melodie Brewster
 WPF 1410 Section 02
 Functions Assignment - Industry
 10-22-2014
 */

//Calculate an estimate the length and cost it will be to create a website for a client
//create variable for hours spent on each page

var perPage = prompt("How many hours on average does it take for you to finish each page?");

//validate response, badger them for a number if you have to
while(isNaN(perPage) || perPage===""){

    perPage = prompt("please enter a number!");
}