/*
 Melodie Brewster
 WPF 1410 Section 02
 Assignment: Expressions (Wacky)
 10-09-2014
 */

//Calculate how many monkeys you have
//Ask the user how many monkeys are in the first barrel
//Create a variable to show the answer

var monkeyBarrel = new Array();
monkeyBarrel[0] = prompt("How many monkeys are in the first barrel?");

//Console.log the answer
console.log(monkeyBarrel[0]);

//Ask the user how many monkeys are in the second barrel

monkeyBarrel[1] = prompt("How many monkeys are in the second barrel?");

//Console.log the answer
console.log(monkeyBarrel[1]);

//Ask the user how many monkeys are in the third barrel

monkeyBarrel[2] = prompt("How many monkeys are in the third and final barrel?");

//Console.log the answer
console.log(monkeyBarrel[2]);

//Calculate total monkeys

var totalMonkeys = parseInt(monkeyBarrel[0]) + parseInt(monkeyBarrel[1]) + parseInt(monkeyBarrel[2]);

//Tell the user the answer
alert("You have "+totalMonkeys+" monkeys in your barrels.");

//Console.log the answer
console.log(totalMonkeys);