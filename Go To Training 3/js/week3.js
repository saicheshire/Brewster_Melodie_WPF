/*
 Melodie Brewster
 WPF 1410 Section 02
 Go To Training Week 3
 10-15-2014
 */

//created an array
var fruitBowl = ["peach", "pear", "apple", "banana"];
//console log array
console.log(fruitBowl);
//change item in the array using the index
fruitBowl[0] = "pear";
//console log fruit bowl
console.log(fruitBowl);
//dot syntax to check how many items are in the array (length is how many items)
console.log(fruitBowl.length);

//created a variable to hold the number of pears in array
var numPears = 0;

//if statement to find out if each array item is a pear
if (fruitBowl[0] === "pear"){ //if fruit 1 is a pear

    numPears ++; //then add it to numPears

}else{ //if it is not a pear FALSE

    console.log("this fruit is not a pear!"); //tell user this is not a pear
}

//check item 2 in array
if (fruitBowl[1] === "pear"){ //is item 2 a pear?

    numPears ++; //yes, then add to numPears

}else{

    console.log("this fruit is not a pear!");
}

//check item 3 in array
if (fruitBowl[2] === "pear"){

    numPears ++;

}else{

    console.log("this fruit is not a pear!");
}

//check item 4 in array
if (fruitBowl[3] === "pear") { //TRUE?

    numPears++; //add to numPears

}else if(fruitBowl[3] === "peach"){

    console.log("this is a peach!"); //console log
}else{

    console.log("this fruit is not a pear!");
}

console.log(numPears);

//validating prompts
var name = prompt("What is your name?");
console.log(name);

//validate the prompt to see if it is empty

if (name === ""){ //if name is blank, then
//re-prompt the user to input their name

    name = prompt("Please enter your name.  Don't leave it blank!");
}

console.log("Hello " + name + " you have " + numPears + " pears in your fruit bowl");

alert("Hello " + name + " you have " + numPears + " pears in your fruit bowl");