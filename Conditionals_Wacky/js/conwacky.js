/*
 Melodie Brewster
 WPF 1410 Section 02
 Conditionals Assignment: Wacky
 10-16-2014
 */

//Determine whether your bitch (bitch=female dog) will receive a major when entered into a dog show
//A major is 3, 4, or 5 points.  Majors are required to receive a champion title on your dog or bitch
//Since the requirements differ between sexes (and breeds), we will be using a bitch as an example
//Create variables to determine how many bitches need to attend in order for yours to receive a major and how many
//bitches are actually attending the show.
var minBitches = prompt("What is the minimum number of bitches required in order for you to get a major?");
//validate response
if (minBitches === ""){ //if answer is blank, then re-prompt the user

    name = prompt("Please enter the minimum number.  Don't leave it blank!");
}
//Console log response
console.log(minBitches);
