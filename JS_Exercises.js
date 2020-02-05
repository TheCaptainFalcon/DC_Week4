// Exercise 1

const myName = "Jon"

function greeting(name){
	console.log("Hello " + name);
}

greeting(myName);

// Exercose 2
var name = prompt("GIMME YOUR NAME")


function greeting(x) {
  if (x === "") {
    console.log("Hello world")
  }else {
    console.log("Hello " + x)
  }
}

greeting(name);

// Exercise 3
var uno = prompt("Name");
var dos = prompt("Favorite subject")


function madlib (x,y) {
  console.log(x + "'s" + " favorite subject in school is " + y);
  
}

madlib(uno,dos)

// Exercise 4

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


// Exercise 5

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



// Exercise 6

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