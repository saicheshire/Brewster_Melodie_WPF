/*
 Melodie Brewster
 WPF 1410 Section 02
 Conditional Assignment: Industry
 10-16-2014
 */

//Determine if your ethernet cable is long enough to reach from the modem to your computer
//Create variable and prompt to determine length of cable
var cableLength = prompt("How long is your ethernet cable in inches?");
//validate response
if (cableLength === ""){ //if answer is blank, then re-prompt the user

    name = prompt("Please enter the length of the cable in inches.  Don't leave it blank!");
}
//Console log response
console.log(cableLength);
//Create variable and prompt to determine how far the modem is from the computer
var modemDistance = prompt("How far, in inches, is the modem from the computer?");
//validate response
if (modemDistance === ""){//if answer is blank, re-prompt the user

    name = prompt("Please enter the distance, in inches, your modem is from your computer.  Don't leave it blank!");
}
//Console log the response
console.log(modemDistance);
//Create if statements to determine whether your cable is long enough
if (cableLength < modemDistance) {
    console.log("You will have to buy a longer ethernet cable.");
} else if (cableLength >= modemDistance){
    console.log("Your ethernet cable should be long enough to reach from your modem to your computer.")
}