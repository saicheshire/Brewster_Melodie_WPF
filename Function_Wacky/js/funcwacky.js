/*
 Melodie Brewster
 WPF 1410 Section 02
 Functions Assignment - Wacky
 10-23-2014
 */

//Determine whether your dog needs to stay overnight after being altered
//create variable for dog's name
var dogName = prompt("What is your dog's name?");

//validate response, keep asking until a name is provided
while(isNaN(dogName) || dogName===""){

    dogName = prompt("please enter your dog's name!");
}
