
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



// var example;
// example = "I'm the example!";
// console.log(example); // I'm the example!


// console.log(example);
// let example = "I'm the example!";   // Uncaught ReferenceError: example is not defined 

// let example = "I'm the example!"; //works!   
// console.log(example);



// EXAMPLE 1

// console.log(hello);    // undefined                               
// var hello = 'world';    

// var hello = 'world';    
// console.log(hello);    // works!                               


// EXAMPLE 2

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// output is magnet


// EXAMPLE 3

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// output is super cool


// EXAMPLE 4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';

//     //console.log(food);
// }

// output: 
// chicken
// half-chicken


// EXAMPLE 5

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// output: Uncaught TypeError: mean is not a function


//console.log(food);
// function mean() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
//console.log(food);

// mean();

// output: chicken, fish


// EXAMPLE 6

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// output: undefined, rock, r&b, disco


// EXAMPLE 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// output: san jose, seattle, burbank, san jose


// EXAMPLE 8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

/* output
{name: "Chicago", students: 65, hiring: true}

Uncaught TypeError: Assignment to constant variable.
    at makeDojo (JS_Hoisting.html:156)
    at JS_Hoisting.html:147

Fix: change line 156 into something like  
dojo.hiring = "closed for now";  

*/

