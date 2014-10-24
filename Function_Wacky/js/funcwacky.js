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
while(dogName===""){

    dogName = prompt("please enter your dog's name!");
}

//create variable for dog's gender
var gender = prompt("Is your dog a male or a female?");

//validate
while(gender===""){

    gender = prompt("please enter your dog's name!");
}

//create if statements
if (gender == "male"){
    console.log(dogName + " will most likely not have to stay overnight.  We'll call and let you know.");
    alert(dogName + " will most likely not have to stay overnight.  We'll call and let you know.");
}

else {
    console.log(dogName + " will have to stay overnight.");
    alert(dogName + " will have to stay overnight.");
}