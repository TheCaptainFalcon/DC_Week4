// Exercise 1 //
function printNumber(){

let x = 0;
while (x<=10){
	console.log(x)
	x++;
		
	}
}

printNumber();



// For Loop version//

function printNumber() {
	for (let x = 0; x<=10; x++)
		console.log(x);
}

printNumber();


// Exercise 2 //

function printSquare(z) {
	for (var i = 0; i < z; i++){ // iterates rows -- note the curly bracket here too
	  for (var j = 0; j < z; j++) // iterates * in row
	      console.log("*");
	  console.log("\n") // moves to new row
}}


printSquare(5);

// Exercise 3 //

