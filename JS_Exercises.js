// Exercise 1 - Hello Part 1
//Write a function hello which given a name, says hello to the name. 
//Use the following template:

const myName = "Jon"

function greeting(name){
	console.log("Hello " + name);
}

greeting(myName);

// Exercise 2 - Hello Part 2
//Modify your hello program such that if no name is given: hello(), 
//it will print "Hello, world!", otherwise it behaves the same as previously.


var name = prompt("GIMME YOUR NAME")


function greeting(x) {
  if (x === "") {
    console.log("Hello world")
  }else {
    console.log("Hello " + x)
  }
}

greeting(name);

// Exercise 3 - Madlib
//Write a madlib function, which is given a name and a subject.
//It will return(not print) a new string: (name)'s favorite subject 
//in school is (subject).



var uno = prompt("Name");
var dos = prompt("Favorite subject")


function madlib (x,y) {
  console.log(x + "'s" + " favorite subject in school is " + y);
  
}

madlib(uno,dos)

// Exercise 4 - Tip Calculator
//Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

//good -> 20%
//fair -> 15%
//bad -> 10%

let dollar = prompt("dollar");
let service = prompt("good, fair or bad?");

function tipAmount (x,y) {
  if (y === "good") {
    console.log(x * 0.20);
  } 
  else if (y === "fair") {
 	console.log(x * 0.15);
  } 
  else if (y === "bad") {
    console.log(x * 0.10);
 
  }
}


// OR

let dollar = prompt("dollar");
let service = prompt("good, fair or bad?");

function tipAmount (x,y) {
  if (y === "good") {
    return(x * 0.20);
  } 
  else if (y === "fair") {
 	return(x * 0.15);
  } 
  else if (y === "bad") {
    return(x * 0.10);
 
  }
}

console.log(tipAmount(dollar,service));

tipAmount(dollar,service)

//Example switch/case usage
// switch(service) {
// 	case "good":
// 	console.log("service was good");
// 	break
// 	case "fair":
// 	console.log("service was fair");
// 	break
// 	case "bad":
// 	console.log("service was bad");
// 	break
// 	default:
// 	console.log("servie wasn't ranked");
// 	break


// Exercise 5 - Tip Calculator 2
//Write a function totalAmount that takes the same arguments 
//as tipAmount except it returns the total as the tip amount plus 
//the bill amount. This function may make use of tipAmount as a sub-task.


let dollar = Number(prompt("dollar"));
let service = prompt("good, fair or bad?");

function tipAmount (x,y) {
  if (y === "good") {
    return(x * 0.20);
  } 
  else if (y === "fair") {
 	return(x * 0.15);
  } 
  else if (y === "bad") {
    return(x * 0.10);
 
  }
}

totalAmount = tipAmount(dollar,service) + (dollar);
console.log(totalAmount);



// Exercise 6 - Tip Calculator 3
//Write a function splitAmount that takes the bill amount 
//and the level of service, and the number of people to split
// the bill between. It will return the final amount for each person.


let dollar = Number(prompt("dollar"));
let service = prompt("good, fair or bad?");
let people = Number(prompt("Number of people to split?"))

function tipAmount (x,y) {
  if (y === "good") {
    return(x * 0.20);
  } 
  else if (y === "fair") {
 	return(x * 0.15);
  } 
  else if (y === "bad") {
    return(x * 0.10);
 
  }
}

// totalAmount = (tipAmount(dollar,service) + (dollar)) / (people);
// splitAmount = totalAmount;
// console.log(splitAmount);


//OR


totalAmount = tipAmount(dollar,service) + dollar;
splitAmount = totalAmount / people;
console.log(splitAmount);