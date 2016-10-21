var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var sortScores = scores.sort( function(first, second){
	// console.log("first", first, "second", second, "first-second", first-second);
	return first - second;
});

var callLastSub = (scores.length - 1);

console.log("Lowest Score=", scores[0]);
console.log("Highest Score=", scores[callLastSub]);

var aList = [];
var bList = [];
var cList = [];
var dList = [];
var fList = [];

for (var i = 0; i < scores.length; i++) {
		var currentScore = scores[i];
		// var currentScoreArray = [currentScore];

if (currentScore < 61) {
			// var fList = [];
			// currentScoreArray.concat(fList);
				fList.push(currentScore);

		} else if (currentScore < 71) {
			dList.push(currentScore);

		} else if (currentScore < 81) {
			cList.push(currentScore);

		} else if (currentScore < 91) {
			bList.push(currentScore);

		} else if (currentScore < 101){
			aList.push(currentScore);
		}
}

console.log("fList",fList);
console.log("Number of F's =", fList.length);

console.log("dList",fList);
console.log("Number of D's =", dList.length);

console.log("fList",cList);
console.log("Number of C's =", cList.length);

console.log("fList",bList);
console.log("Number of B's =", bList.length);

console.log("fList",aList);
console.log("Number of A's =", aList.length);

////// INSTRUCTIONS //////

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?



///////////////// Experiment ////////////////

// sub_array.push(i);
//     super_array.push(sub_array.concat());

//     	var fList = [];
// 				scores.push(i);
// 				fList.push(scores.concat());
// 				console.log("fList",fList);


// function filterIt(element, index, array) {
//   if (element.length === 5) {
//     return element;
//   }
// }

// var fruits = ["apple", "banana", "cherry"];
// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits); // ["apple"]


// var new_array = arr.filter(callback[, thisArg])


// function checkScores(score) {
//   return score <= 60;

// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]


// var ages = [32, 33, 12, 40];

// function checkAdult(age) {
//     return age >= document.getElementById("ageToCheck").value;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.filter(checkAdult);