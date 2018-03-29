//Create a function that asks for a true/false from the user ( confirm() ) and handles the
//answer from the user with an if/else statement.
function func1() {
  let answer = confirm("Yes or no?");
  if(answer == true){
    console.log(answer + " should be true");
  }
  else{
    console.log(answer + "should be false");
  }
}

//Now rewrite that function (but keep that original function in your code) and use a ternary
//operator instead of an if/else statement.
// Be sure to call both functions so that they execute when your script is run.
function func2() {
  let answer = confirm("Yes or no?");
  return answer == true ? console.log(answer + " should be true") : console.log(answer + "should be false");
}

//func1();
//func2();

//Create a function that asks a user for a NUMBER input ( prompt() ) and handle the users
//response with an alert based on what they type. You should handle the cases of nothing
//being entered, ‘cancel’ being selected, and something other than a number being
//entered. With each case, a different alert() message should be shown to the user.

function func3() {
  answer = prompt("Enter a number: ");
  if(answer == NaN){

  }
  else if (answer == "") {
    alert("You didn't put anything in")
  }
  else if (answer == null) {
    alert("You hit cancel")
  }
  else {
    alert(answer);
  }
}


// Be sure to call this function so that it executes when your script is run.
//func3();

// You will create a constructor function that constructs an object that contains at least 3
//key-value pairs. One of the key-value pairs must be a function that references another
//key in that object.


function Person(name, age) {
	this1 = {};

	this.name = name;
	this.age = age;
  this.howdy = function() {
    alert(name + " says hi");
  }

	return this;
}

let person = new Person("Emma", 20);


//You will create a function that makes a copy of an object and has the option of adding an
//additional key-value pair to the object. There are multiple ways you could do this, so
//interpret it in a way that makes sense to you.
function copyObject(user) {
  let clone = {};

  for(let key in user) {
  	clone[key] = user[key];
  }
  return clone;
}


// Use your constructor to construct an object.
let user = new Person("Ana");

//Then use your copy function to make a copy (not by reference) of that object and add
//another key-value pair to the new copied object.
let user2 = copyObject(user);


//13. Console log each of the objects with labels. Ex: console.log(“object label here”, object);
console.log("Constructor function", person);
console.log("First object", user);
console.log("copied object", user2);

//14. Call each of the objects functions respectively and somehow show that they access the
//objects property successfully (maybe with a console log somewhere).
console.log(user.howdy);


//15. Create a function declaration that takes 2 strings and has an optional 3rd string
//parameter. If there is no 3rd parameter, provide a default. This function will return a
//single string incorporating these 3 parameters.
function makeRower1(name, year, weight=160) {
	return {
		name: name,
		age: age,
    weight: weight
	}
}

//16. Now comment out the above, and rewrite the function as a function expression.
let strokeSeat = function (name, year, weight = 160) {
	return {
		name,
		year,
    weight
	}
}

//17. Now comment out the above, and rewrite the function expression using an arrow
//function. Make this arrow function as short as possible.
let strokeSeat1 = (name, year, weight = 160) => name, year, weight;
