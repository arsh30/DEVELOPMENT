// console.log("hello world");  it is used to print the values

/**** Section 1 -> Values and Variables *****/

// var name = 'Arshdeep Singh';
// var myAge = 26;

// =========== 1) CHALLENEGE TIME ============================

/*

var _myName = "vinod";
var _1my__Name = "Bhadur";
// var 1myName = 'thapa';
var $myName = "tahapa tech";
var myName% = 'Arshdeep Singh';

console.log(myName%);

*/

/**** Section 2 -> Data Types in Javascript *********/

// var myName = "Arsh";  //1) strings
// console.log(myName);

//typeof -  operator
// console.log(typeof myName);

// var myAge = 26;  // 2) Number
// console.log(typeof myAge);

// var iAmThapa = true;  //3) boolean
// console.log(typeof iAmThapa);

// ======== 2 CHALLENGE TIME ================================

/* 
console.log(10 + "20");
console.log(9 - "5");
console.log("Java" + "script");
console.log(" " + " ");
console.log(" " + 0);
console.log("vinod" - "thapa");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);
*/

/*
Interview Ques 1: Difference between null and undefined?
 sol) null means we initialize the value by null and in javascript it is a bug because when we assign null value how can its data type is Object , 

        var iAmUseLess = null;
        console.log(typeof(iAmUseLess));

        undefined (it is data Type) means we only declare the variable and not assigning any values to that variable
        var iAmStandBy;
        console.log(typeof iAmStandBy);

Interview Question 2) What is Nan?
    sol) When we subtract two stirng it gives not a number. It is a property of global object
  
    var myPhoneNumber = 9876543210;
    var myName = "Arshdeep Singh";
    console.log(isNaN(myPhoneNumber)); // 2nd method isNan -> it gives false when the number exists, and givess true for all other things except numbers
    console.log(isNaN(myName));
 */

// =======  CHALLENGE 3  ==============================

// console.log(NaN === NaN);  //op false
// console.log(Number.NaN === NaN);  //op false
// console.log(isNaN(NaN));  //op true
// console.log(isNaN(Number.NaN));  //op true
// console.log(Number.isNaN(NaN));  //op true

/********** SECTION 3 EXPRESSION AND OPERATORS [1:14 min] *****************/

// console.log(5 + 20);  //EXPRESSION

// 1) ASSIGNMENT OPERATOR (=)
// An assignment operator assigns a value to its left operand
// based on the value of its right operand

// var x = 5;
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y); //It is bug, whenver we compares the value with any string it gives wrong answer so better to use string literal
// console.log(`Is both the X and Y are Equal or Not: ${x == y}`);

// 2) Arithmatic Operators
// An Arithmatic operator takes numerical values
// as their operand and return a single numeric value

// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log(`Remainder operator ${27 % 4}`);

// 2.1) INCREMENT AND DECREMENT OPERATOR
// Operator: x++ or ++x or x-- or --x
// x++ or x = x + 1 or x += 1 => They all are same
// These operator should be only used with variables, not with expressions or constants
// eg: ++5; => wrong
// eg2: ++(x + y * z); => wrong
// eg3: ++x; => correct because it is variable

// Pre Increment => Note - [agr variable ke pehle ++ hai to pehle value jo hai increment hogi
//  jiske sath lga hai then assign hogi value
// Overall assign hone se pehle jiske sth operator use hora hai uski value ko
// increment krega then assign krega]

// Post Increment => Note - [eg: y = x++ means assignemnt ke operator ke sath variable hai so pehle value assign hojegi uss variable me
// then jis variable ke sath ++ hai usme increment krega assign hone ke baad jb pura expression evaluate hojega tab ]

// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = num-- + 5;  //pura expression evluate hua value assign hui then subtraction hua original val me
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);

// 3) COMPARISION OPERATOR - 1:31 MIN

// A comparision operator compares the operand and
// return a logical value based on whether the comparision is true or false
// eg of logical operator are == , != , < , <= , > , >=

// var a = 30;
// var b = 10;

// 3.1) Equal (=)
// console.log(a == b);

// 3.2) Not Equal (!=)
// console.log(a != b);

// 3.3) Greater Than(>)
// console.log(a > b);

// 3.4) Greater Than or Equal (>=)
// console.log(a >= b);

// 3.5) Less Than (<)
// console.log(a < b);

// 3.6) Less Than or Equal (<=)
// console.log(a <= b);

// 4) Logical Operators
// It return true or false;

// var a = 30;
// var b = -20;

// 4.1) Logical AND (&&)
// The logical Operator (&&) operator
// It return true only if only
// all the conditions or expressions must have to satisfy true

// console.log(a > b && b > 0);

// 4.2) Logical OR (||)
//  it return true only if
//  any one statement is true [means koi bhi true then its result is true]

// console.log(a > b || b > 0 ||  b < 0);

// 4.3) Logical NOT (!=)
//  it return true if the result is false and vice versa

// console.log(!(a > 0 || b < 0));

// 5) String concatenation (Operators)
//  concatenation operator ( + )
// 2 string ko combine krke as a single string output throw krta hai

// console.log("hello World");
// console.log("hello " + "world");
// var myName = 'Arsh';
// console.log(myName + "deep");
// console.log(myName + " Singh");

// 6) TERNARY OPERATOR  -> WE will do this later

// ======  CHALLENGE 4 ================

// What will be the output of 3**3 ?  [It is a power operator or exponential operator]
// what will be the output, when we add a number and a string ?
// write a program to swap two number
// write a program to swap two number without using any third variable

// sol 1)
// console.log(3 ** 3);  //3 * 3 * 3
// console.log(10 ** -1);  // 1 / 10

// sol 2)
//  console.log(21 + 'Arsh');

// sol3)
// var a = 10;
// var b = 5;

// output = a = 5, b = 10;
// var temp = a;
// a = b;
// b = temp;

// console.log("the value of a is:" + a);
// console.log("the value of b is:" + b);

// sol4)++
// var a = 10;
// var b = 5;

// // output = a = 5, b = 10;
// a = a + b; // a = 15;
// b = a - b; // b = 15 - 5 => 10 ✔
// a = a - b; // 15 - 10 => 5; ✔

// console.log("the value of a is:" + a);
// console.log("the value of b is:" + b);

/*
 Interview Question 3) Difference between == and === ?
 sol)  == -> it only check the values,
       === -> it compares the values as well as data type 
          
         var num1 = 5;
         var num2 = '5';

         console.log(typeof(num1));  op -> Number
         console.log(typeof (num2)); op -> String
    
         console.log(num1 == num2);
         console.log(num1 === num2);
 */

/**** SECTION  - 4 Control Statements and loops [2:04 min] *****/

// 4.1) If - else loop
//  It runs only when the statemnet is true otherwise else part will execute
// eg: if rain will come tommorow then you will have to carry  umbrella and
// agr nhi aati to kuch mat lena means else part will execute
// AGR TRUE HOGI TO IF CHLEGA AGR KUCH NHI HOGA TO ELSE CHLEGA

/* syntax -> 
    if(condition) {
    }else {
    }

    CODE -> 

    var tommor = 'sunny';
    if (tommor == 'rain') {
        console.log('take a raincoat');
    } else {
        console.log('No need to carry😁');
    }

*/

// ================ CHALLENGE 5 ============================
// Write a program that finds if a given year is a leap year or not? [ leap year that comes once in every 4 yearthat is 29 feb ]
/*
ques) what is leap year? 
sol) 1) if year is exactly divided by 4 ie leap year eg: 2016 , 2020
     2) except if aisa year jo sirf 100 se divide hora ho and 4 se divide nhi hora ie NOT A LEAP YEAR, Eg 2100, 2200
     3) except if , jo sirf 400 se direct divide ho ie leap year

     var year = 2020;
     debugger;
     if (year % 4 === 0) {
       if (year % 100 === 0) {
         if (year % 400 === 0) {
           console.log("The year " + year + " is a Leap Year");
         } else {
           console.log("The year " + year + " is Not a Leap Year");
         }
       } else {
         console.log("The year " + year + " is a Leap Year");
       }
     } else {
       console.log("The year " + year + " is Not a Leap Year");
     }

ques 2)  what is truthy and falsy value in Javascript?
sol) 🙌 0, " ", undefined, null, NaN, false

        if ((score = 0)) {
        // 0 assign kra means false k=condition so else stat will execute
        console.log("we loss the game");
        } else {
        console.log("we won the game");
        }
*/

// 4.2) Conditonal Ternary Operator
// it takes 3 operands
// vairbale name = ( condition ) ? value1 [run only if stat is true] : value 2 [else part will run]

// var age = 17;
// if (age >= 18) {
//   console.log("you are  eligible to vote");
// } else {
//   console.log("you are not eligible to vote");
// }

// var age = 17;
// age >= 18 ? console.log("you can vote") : console.log("you can not vote");

// 4.3) Switch Statement
/**  switch statemnent, it is short syntax of wrting if elseif elseif elseif else
 
 syntax  ->
 switch (condition) {
    case 'caseName' : value  [if]
    case 'caseName2' : value [elseIf]
    case 'caseName3' : value [elseIf]
    default: value [else]
 }

 ---- NESTED IF-ELSE WAY ----

 var area = "rectangle";
 var pi = 3.14,
   r = 3,
   l = 5,
   b = 5,
   h = 3;
 if (area == "circle") {
   console.log("area of circle is " + pi * r ** 2);
 } else if (area == " triangle") {
   console.log("area of triangle is " + (l * b) / 2);
 } else if (area == "rectangle") {
   console.log("area of rectangle is " + l * b);
 } else {
   console.log("enter valid data");
 }

 BY SWITCH STATEMENT
 var area = "rectangle";
 var pi = 3.14,
   r = 3,
   l = 5,
   b = 5,
   h = 3;
 switch (area) {
   case "rectangle":  //jo case match hoga vo chlega
     console.log("area of rectangle is " + l * b);
     break;
   case "triangle":
     console.log("area of triangle is " + (l * b) / 2);
     break;
   case "circle":
     console.log("area of circle is " + pi * r ** 2);
     break;
   default:
     console.log("enter valid data");
 }
 */

//  4.4) WHILE LOOP
// LOOP will run  until the statements unitl the statements is true,
// if it is false then the loop will stop
// while loop - mostly used jab humko pta na ho ki kab rukna hai
/*

    WHEN WE USE FOR LOOP AND WHILE LOOP 

    Use a for loop to iterate over an array.
    Use a for loop when you know the loop should execute n times.

    Use a while loop when asking for user input.
    Use a while loop when the increment value is nonstandard.

    SYNTAX :-> 
    var name declaration ;
    while(condition) {
      inc/dec;
    }

    var num = 2;
    while (num <= 10) {
      console.log(num);
      num++;
    }
*/

// 4.5) Do While loop
// It is rarely used
// Do-while loop ik baar to output through krega hi krega
// wheter the condition is true or false, it dont bother about that
// but while loop gives utput only if the statement is true only

/*
Syntax ->
do {

} while(condtion){

}
EG:
var num = 2;
do {
  console.log(num);
  num++;
} while (num < 5);
{
  console.log("this is Arsh");
}
*/

// 4.6) For Loop
/*
Syntax ->
  for(initialise variable; condition; incremnet/ decrement) {

  } 
  
  EG:
  for (let i = 0; i < 10; i++) {
  debugger;
    console.log(i);
  }
*/

// ========== CHALLENGE 6 ========================
// wap to print table for given number (8,9,12,15) using for loop ?
// output : 8 X 1 = 8;
// : 8 X 2 = 16;

// for (var i = 1; i <= 10; i++) {
//   var tableOf = 8;
//   console.log(tableOf + " X " + i + " = " + tableOf * i);
// }

// ================================================

/****Section 5- FUNCTIONS IN JAVASCRIPT  ******/

/*
what we will se 
1) function definition ✔
2) calling function ✔
3) function parameter ✔
4) function arguments ✔
5) function expressions ✔
6) return keyword ✔
7) anonymous function

*/

// Function -> A block of code designed to perform a particular task
// 5.1) FUNCTION DEFINTION ->

// Before using a function, we have to define it first

//  A function definiaiton is also called function declaration
// It starts with function keyword

/*
Synatx ->
function functionName() {
  
}

//Function to add the two numbers -> function definition
function addTwoNumbers() { // -> function definition ✔
  var a = 10 , b = 5;
  var total = a + b;
  console.log(total);
}

addTwoNumbers();  // 2) call the function name ✔
 */

// ================== CHALLENGE 7 =========================

// WHAt is the difference between function parameter vs function Arguments
// function parameter -> name listed int the function functions definition
// function arguments -> real values passed to the function

// function sum(a, b) {  //function parameters
//   // dont need to write let, var
//   var total = a + b;
//   console.log(total);
// }
// sum(50, 50); //function arguments

// ============================================================================

// Interview Question 4:) Why function ?
// sol 4)  we can reUse the code by calling the function, by defining it only one time

// 5.5) FUNCTION EXPRESSIONS -> means if functons return anything and to catch into the variable
//  that is function expression

// 5.6) Return Keyword
// when return statements fires
// the function will stop executing

// function ko jab call krre hai always catch the variable jo humne function se return krwaya
//EG:
/*

function sum(a, b) {
  return (total = a + b);
}
var totalSum = sum(2, 3); // totalSum -> here we catch the value and this is function expressions
console.log(" the sum of two number is " + totalSum);

*/

// 5.7) Anonymous function
// A function expression is similar to and has the same syntax as a function declaration one
// can defined "named"

/*
var anonymousFunction = function (a, b) {
  //anonymous function -> function without any name is called anonymous function
  return (total = a + b);
};

console.log(anonymousFunction(15, 15));
*/

// *********====================== ECMA SCRIPT STARTS OR MODERN JAVASCRIPT [3:47 MIN]===============******

// Now its time for Modern Javascript 😍😍😍
// 🙏 Features of ECMASCRIPT 2015 also known as ES6 🙏🙏

// 1) LET VS CONST VS VAR

// Var => Functional Scope
// let => Block Scope
// const => we can not redeclare the value

/*
  VAR - >

 var myName = 'Arshdeep';
 console.log(myName);

 var myName = 'Arshdeep Singh';
 console.log(myName);

 var myName = "Arshdeep";
 console.log(myName);

 myName = "Arshdeep Singh";
 console.log(myName);
 */

/*
LET -> 

// re Declare is Not possible
let myName = "Arshdeep";
console.log(myName);

let myName = "Arshdeep Singh";
console.log(myName);

// Reinitialize

let myName = "Arshdeep";
console.log(myName);

myName = "Arshdeep Singh";
console.log(myName);

*/

// var => function scope
// let => block scope

//block scope -> means yeh apne upr jakr first '{' dhundta hai udr tak scope hota hai.eg
// function biodata() {
//   let myFirstName = 'Arshdeep';
//   console.log(myFirstName);
//   if (true) {
//     let myLastName = 'Singh';
//     console.log('inner' + myFirstName);
//     console.log('inner' + myLastName);
//   }
//   console.log(myLastName);  // it is declare inside the the 'if', so jidr declare udr se
//   // upr jakr dekhege ki first { kidr hai udr tak scope hoga
// }

// var -> functional Scope -> means jidr declare hai udr se apne upr first
// function dhundta hai jidr declare hai udr tak scope is valid
// function biodata() {
//   var myFirstName = "Arshdeep";
//   console.log(myFirstName);
//   if (true) {
//     var myLastName = "Singh";
//     console.log("inner " + myFirstName);
//     console.log("inner " + myLastName);
//   }
//   console.log(myLastName); // access because yeh jidr declare hai vo udr se apne upr
//   // tak ke first funtion ko dhundta hai udr tak scope is valid
// }
// // console.log(myLastName); error because it scope is functional scope
// biodata();

// =======================================

// 2) Feature2:  TEMPLATE LITRALS [Template Strings]
// TEMPLATE LITRALS -> they are enclosed in backticks (``) we can write anything into this
// if we want to access the variable then we use '${}'
// we can do calculations into this bracket as well
// [Note: we mostly use this instead of normal variable]

// Javascript program to print table for given number (8);
// for (let i = 1; i <= 10; i++) {
//   let tableOf = 12;
//   // console.log(8 + " * " + i + " = " + 8 * i);
//   console.log(` ${tableOf} * ${i} = ${tableOf * i}`);  // -> Template literal (``)
// }

// 3rd feature Default Parameters
// means bychance agr koi arguments me value pass krna bhul gya to op aayega NaN
// isse overcome ke liye hum parameter me value set kr skte hai
// eg:

// function mult(a, b = 3) {   //here we assign the value
//   return a * b;
// }
// console.log(mult(3));  //here we forgot the 2nd variable ie b now we can set or assign the value into into parameter
// // By default the values goes into 1st variable ie 'a'

// 4th -> Fat Arrow Function
//benefits ->
// 1) agr 1 line ka code hai toh dont write return keyword
// 2) agr 1 line ka code hai toh dont write { } these brackets
// 3) basically it shrts the code
// 4) we can declare the variables as well into template strings

// const sum = () => `the sum of two number is : ${(a = 5) + (b = 5)}`;
// // let a = 5,
// //   b = 6;
// // let sum = a + b;
// console.log(sum());

/********* Section 6 -> Arrays In Javascript **********/

// 1) It is a collection of same data type but in JS we can store any type of value
// like boolean, int, character,  string etc

// 2) In JS we have an Array Class and Arrays are the prototype of this class

// var names = new Array(); //means  Array class ka new instance create kra names and
// usme value put krdi but this line is optional behind the scenes js automatically handle this
// var names = ["ramesh", 22, "male"];

// eg: of Array -> []; we cann add anything into this bracket
// var names = ["arsh", 21, true, "simran"];
// console.log(names); //op -> all element in array

/*
 * WHAT WE WILL DO IN THIS LEC ->
 * 1) Traversal of an array
 * 2) Searching and filter in array
 * 3) sort and compare in array
 * 4) CRUD operations in array
 * 5) Map(), reduce (), filter()
 */

// 6.1) Traversal in Array
// if we want to get single data at a time and also
// if we want to change the data then we have to traveral the array

// var myFriends = ["ramesh", "arjun", "vishal", "arsh"];

// ACCESS 1 ELEMENT -> jo element req hoga usko sqaure bracket me index me index nu put krege
// console.log(myFriends[3]);

// Access the last Element in an Array ;length property' -> ArrayName.length - 1
// console.log(myFriends.length); //length starts from 1
// console.log(myFriends[myFriends.length - 1]);  //print the last value

// If we want to print all the elemnents in array, we have to travel
// var myFriends = ["ramesh", "arjun", "vishal", "arsh"];

// for (let i = 0; i < myFriends.length; i++) {  // i is the index
//   console.log(myFriends[i]);
// }

// After ES6 we have for.. in and for.. of loop too
// for in loop -> It returns index number of an array
// for of loop -> It returns the elements of an array
// forEach loop ->

// var myFriends = ["ramesh", "arjun", "vishal", "arsh"];

// for (let elements in myFriends) {
//   console.log(elements);
// }

// for (let elemnents of myFriends) {
//   console.log(elemnents);
// }

// ----- For Each loop => [imp] ------------------
// It calls a function for each element in Array
// it only moves forward, we can not use break statement
// yeh start se end tk move hoega hi hoega

// var myFriends = ["ramesh", "arjun", "vishal", "arsh"];
// myFriends.forEach(function (elem, index, array) {
//   // array  is current aaray
//   console.log(elem + "index: " + index + " -> " + array);
// });

// var myFriends = ["ramesh", "arjun", "vishal", "arsh"];
// myFriends.forEach(elem =>  console.log(elem))

// -------------------

// 6.2) Searching and Filter in an Array

// 6.2.1) Array.prototype.indexOf() 🙋‍♂️🙋‍♂️
// indexOf() -> it comes under searching in array
// 1st parameter is -> that element we have to search
// 2nd parameter is -> konse index number se search krna start krna hai, it only moves forward

// It Returns the first (existing) index, and agr data mila hi nhi to return krega -1.

// var myFriendNames = ['vinod', 'bhadur', 'thapa', 'thapatechnical', 'Thapa'];
// console.log(myFriendNames.indexOf('thapa',3));

// 6.2.2) Array.prototype.lastIndexOf() 🙋‍♂️🙋‍♂️
// lastIndexOf() -> it also comes under searching, yeh backward search krta hai
// 1st parameter is -> jo search krna hai
// 2nd parameter is optional -> kidr se search krna start krna hai

// It return  the last (existing) index [piche se dhundna start krega or uska index number dedega]
//  agr data mila hi nhi to return krega -1.

// var myFriendNames = ["vinod", "bhadur", "thapa", "thapatechnical", "thapa"];
// console.log(myFriendNames.lastIndexOf('thapa',3));

// 6.2.3)  Array.prototype.includes() 🙋‍♂️🙋‍♂️
// .includes() -> [ for Searching ]
// means data that we have to find that is present in an array or not
// It only moves forward ,
// 1st parameter is check krega ki data present hai ya nhi
// 2nd parameter is kidr se start krna hai search krna

// It Returns a boolean value, if present it return True else return False
// [Hint] -> It is used in validations,
// eg: jo bhi array dekh rhe hai usme data included hai ya nahi, if true too kro else kuch nhi kro

// var myFriendNames = ["vinod", "bhadur", "thapa", "thapatechnical", "Thapa"];
// console.log(myFriendNames.includes("thapa", 3));

// 6.2.4) Array.prototype.find() 🙋‍♂️🙋‍♂️
// find() -> pass the callback function into this
// It comes under 'filtering part'
// It return the found element if some element in the array satisfies the testing fn
// It returns 'Undefined' if Not found
//only problem is that it return only one element [jo pehle satisfy krega]

// const prices = [200, 300, 350, 400, 450, 500, 600];
// const findElem = prices.find((elem) => {
//   return elem < 400;
// });

// console.log(findElem);  // -> there is bug that it return only one value

// 6.2.5) Array.prototype.findIndex 🙋‍♂️🙋‍♂️
// It is same as find Method but yeh element ki jgh uska index number deta hai
// It returns -1 if not Found
// It is also comes under filtering, first satisfy value dega

// const prices = [200, 300, 350, 450, 500];
// const findEle = prices.findIndex((elem) => {
//   return elem < 400;
// });
// console.log(findEle);

// 6.2.6)  Array.prototype.Filter method  🙋‍♂️🙋‍♂️
// Filter method -> It returns a new Array containng all elementsof calling array
// jo jo elements satisfy honge sare vo sare ik array me return hojayege
// agr koi elements satisfy na ho to yeh empty array return krega

// const prices = [200, 300, 350, 400, 450, 500, 600];
// const newPriceTag = prices.filter((elem) => {
//   return elem < 400;
// })
// console.log(newPriceTag);  //-> op -> [200 , 300, 350];

// 6.3) HOW TO SORT AND COMPARE AN ARRAY 🙋‍♂️🙋‍♂️
// 6.3.1) Array.prototype.sort(); 🙋‍♂️
// sort() method -> It sort the elements of an array and return the sorted array
// The default sort order is Ascending Order

// const months = ['march', 'jan', 'april', 'feb', 'dec'];
// console.log(months.sort()); // note: It compares the String according to their Alphabetically Order

// NOTE -> It sorts the number in ascending order
// It first convert the numbers into the strings and then 1st character ko compare krega sabke sath
// Basically this Sort method work on Strings, so Acc to the Numbers 1 , 2, 3 ...
// const numbers = [1, 30, 4, 21, 100000, 99];
// console.log(numbers.sort());

// 6.4) How to Insert, Add, Replace, and Delete Elements in Array (CRUD)

// 6.4.1)  Array.prototype.push(); 🙋‍♂️
// The push() method adds one more elements to the end of an array
// and return the new Length of the array

// const animals = ["pigs", "dogs", "cats", "goats"];
// console.log(animals.push("camel"));  // it return the length of an array
// console.log(animals.push("camel", "horse", "tiger"));  //we can push multiple elemnts also
// console.log(animals);

// 6.4.2 Array.prototype.unshift() 🙋‍♂️

// unshift() -> this methods add the elements in the first position
// Note -> push and unshift methods both are same, only difference is that
// push add the elements in the last
// unshift add the elements in the begining
// It also returns the new length of an array

// const animals = ["pigs", "dogs", "cats", "goats"];
// console.log(animals.unshift("horse","tiger")); // return the new length, and isme bhi hum multiple elements enter krwa skte hai
// console.log(animals);

// 2nd Example

// const myNumbers = [1, 2, 3, 5];
// console.log(myNumbers.unshift(4, 6));
// console.log(myNumbers);

// 6.4.3) Array.prototype.pop() 🙋‍♂️
// simpley pop means to delete the elements from an array
// It removes the last elements from the array and ussi ko return kra jisko remove kra

// const plants = ["brocoli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants.pop());

// 6.4.3) Array.prototype.shift() 🙋‍♂️
// It removes the elements from arra from the front
// and it returns the remove elements

// const plants = ["brocoli", "cauliflower", "kale", "tomato", "cabbage"];
// console.log(plants.shift());
// console.log(plants);

// ============= challenge 9 =================================

/**
 * 6.4.4) Array.prototype.splice 🙋‍♂️
 * Splice -> Add and remove elements from an array
  
 
  1) Add Dec at the end of an array ?
  2) what is the return value of splice method ?  
  3) update march to March (update) ?
  4)Delete June from an Array ? [delete from mid]

  [NOTE -> DO this all 4 question insert,read,update,delete  perform all these 4 question with one method]
  so all CRUD operations are done with -> splice method
  const months = ["jan","march","april","june","july"];
 
 */

// const months = ["jan", "march", "april", "june", "july"];

//sol 1):
// const newMonth = months.splice(5, 0, 'Dec');// 1st param is index number, 2nd param is kya delete krna, 3rd param is kya add krna hai
// const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);

//sol 2) -> splice method is mostly used to delete.
//  agr kisiko delete krege to vo ik new array me return krega
// console.log(newMonth);

// sol3) update anything
// const months = ["jan", "march", "april", "june", "july"];
// const updatedMonth = months.splice(1, 1, 'March');
// console.log(months);

// OR 2ND WAY -> agr kuch update krna ho bheech se or array bhot bda to how we do this
// use by indexOf method

// const months = ["jan", "march", "april", "june", "july"];
// const monthIndex = months.indexOf("march"); //it return the index number if found, if not found it return -1
// console.log(monthIndex);
// if (monthIndex != -1) {
//   const updatedMonth = months.splice(monthIndex, 1, "March");
//   console.log(months);
// } else {
//   console.log("No data such found");
// }

// sol4) delete june from array
// const months = ["jan", "march", "april", "june", "july"];
// const indexOfMonth = months.indexOf("june");
// if (indexOfMonth != -1) {
//   // const deletedMonth = months.splice(indexOfMonth, 1); // agr delete count 2 denge to indexMonth se start hokr next 2 elements delete krdega
//   //if we want to delete all elements from april
//   const deletedMonth = months.splice(indexOfMonth, Infinity); // agr delete count 2 denge to indexMonth se start hokr next 2 elements delete krdega
//   console.log(months);
// } else {
//   console.log("enter correct month");
// }

// 6.5) Map, Reduce, Filter 🤞

// 6.5.1) Array.protoType.map() 🙋‍♂️

//  let newArray = arr.map(callback(currentValue[,index[, array]]){
// return element for new Array afyer executing something
// },[,thisArg])

// Return a new Array jisme vo sare data honge jo chaiye, in true or false format
// It return a new Array without violating the original array
// forEach and map are almost same forEach loop -> it reflects original array but map return new array without violating the array
// we can do also chaining in this .map after this jo value aayegi to uspr filter aply krdiya

// const array1 = [1, 4, 9, 16, 25];

// num > 9 yeh chaiye

// let newArray = array1.map((currElem, index, arr) => {
//   return currElem > 9;
// });

// let newArray = array1.map((elem,index,arr) => {
//   return `Index Nu : ${index} and the value is ${elem} belong to ${arr}`
// })
// console.log(array1);
// console.log(newArray);

// =============== Challenge 11 =============================
/*
 que 1) find the sqaure root of each element in an array?
 let arr = [25,36,49,64,81];

 ques2) multiply each elements by 2 and return only those elements which are greater than 10?

 */

//sol 1)
// let arr = [25, 36, 49, 64, 81];
// let arrSquare = arr.map((elem) => {
//   return `the square of every element is: ` + Math.sqrt(elem);
// });

// sol2)
// let arr = [2, 3, 4, 6, 8];
// let multiplyElem = arr
//   .map((elem) => {
//     return 2 * elem;
//   })
//   .filter((elem) => {
//     return elem > 10;
//   }).reduce((accumulator,elem) => {
// return accumulator += elem;
// });

// console.log(multiplyElem);

// 6.5.1) Array.protoType.Reduce 🙋‍♂️
// it is very important
// It is used to flatten an array
//  means to convert  the 3d or 2d array into 1d array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resuting in single output value

// The reducer function  function takes four arguments:

// Accumulator
// current value
// current index
// source array

// eg: the question that we done in prev challlenge , multiply elem with 2 and return those value
// which are greater than 10 and agr isme ik hor condition add krde ki jo element reh gye
// unka sum, avg, product chaiye, percentage or
// and important agr single value data chaiye ho to we use this

// eg:we can not ue map method use hame true false milega, filter method se bhi nhi ho payega to sum kese find krege
// Note: jidr bhi single value result chiaye hoga like avg, sum to filter method use krege

// let arr = [5, 6, 2];
// // find sum
// let sum = arr.reduce((accumulator, elem, index, currArr) => {
//   // accumulator means ik sath jodna, like a box container stored every value
//   // return (accumulator += elem);
//   return (accumulator *= elem);
// },2);  // 2 is the initial value jo pehle se hi store hai accumulator me

// console.log(sum);

// How to Flatten an Array [very Img]
// means convert 2d or 3d to 1d

// const arr = [
//   ['zone1', 'zone2'],
//   ['zone3', 'zone4'],
//   ['zone5', 'zone6'],
//   ['zone7', 'zone8'],  [Note: yeh nested array ko flat nhi kar skta after ecma 2020 to kar payega]
// ];

// let flatArr = arr.reduce((acc,currElem) => {
//   return acc.concat(currElem);
// })

// console.log(flatArr);

// =========================================================================

/******** SECTION 6 -> STRINGS 6: 40 MIN **********/

/* What we will learn in this lecture

1) Escape Character
2) Finding a String in String [imp]
3) Searching for a string in a string
4) Extracting String Part
5) Replacing String content
6) Extracting string character
7) Other useFull method

*/

// A javascript string is zero or more characters written inside quotes
// [means single comma, doube inverted comma me jo likhte that is string]

// Javscript strings are used for storing and manipulating text.
// you can use single or double quotes

// Strings can be created as primitives,
// from string literals, or as objects, using the string() constructor

// let myName = 'vinod thapa';
// let myChannel = 'vinod thapa';

// let ytName = new String("Thapa technical"); Not use
// console.log(myName);
// console.log(ytName);

// How to find the length of a String
// String.prototype.length 🙋‍♂️
// It return the length of every character and it includes the space also

// let myName = "vinod thapa";
// console.log(myName.length);

// 👀 Escape character
// means string ke andr ik hor string dalde double qoutes ik andr double qoutes how to do this

// 1) Using backSlash -> (\" Type anything \")

// let anySentence = "we are the so called \"vikings\" from the north";

// 2) if you dont want to mess, imply use the alternate qoutes
// let anySentence = 'we are the so called "vikings" from the north';
// console.log(anySentence);

// 6.2 👀  Finding A string in a string

// String.prototype.indexOf(searchValue,from Index (kidr se start krna search krna)) 🙋‍♂️
// indexOf() method return te index of the first occurence a sprecified text in string
// agr data na mile to it return -1

// const myBioData = 'I am the thapa Techical';
// console.log(myBioData.indexOf("t",6));  // it includes the space also, space ko bhi as a index count krta hai string me

// 6.2.2) String.prototype.lastIndexOf() 🙋‍♂️
// It start from backward search to forwrd search and it return -1 if not found

// const myBioData = "I am the thapa Techical";
// console.log(myBioData.lastIndexOf("t", 6));

// 6.3) Searching for a String in A string 👀

// String.prototype.search (regexp)🙋‍♂️

// The search() method search a string  for a specified
// value and return the position of the match
// it return -1, if we dont find a string
// but it can not take 2nd parameter to start

// const myBioData = 'i am the thapa technical';
// let sData = myBioData.search("thapa");
// console.log(sData);

// 6.4) Extracting String Parts 🙋‍♂️

// There are 3 methods for extracting a part of a string:

// 1) slice (start,end);  // end is not included and hence original array will not change
// 2) substring (start, end);
// 3) substr (start,end)

// 6.4.1) The slice() method 🙋‍♂️
// slice () extract a part of a string and return the extracted part in new string

// this method takes 2 parameter: the start position, and the end posiition (end not included)

// var str = 'apple, banana , kiwi';
// let res = str.slice(0, 9)
// let res = str.slice(0, -5); // 0 se start hoga and end agr -5 hai means means last se 5 index aage tak ka
// let res = str.slice(2); // agr sirf starting index dete hai to puri end tak ka array dedega
// console.log(res);

// ============ Challenge 11) ==========================

// Display only 280 character of a string like the one used in Twitter?
//  means 280 chracter hi likh skte hai usse jyda nhi likh skte

// let myTweets = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui labore ullam. Rem, autem quasi, dicta aliquid cupiditate libero nihil eos aspernatur consectetur ratione neque fugit perspiciatis? Adipisci recusandae cupiditate est possimus! and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, facilis quia. Saepe deleniti asperiores quae quaerat maxime ea voluptate mollitia veritatis reiciendis laborum hic odio neque quos itaque fugit, molestias, quidem alias quisquam error libero nesciunt? Vitae, natus ut adipisci enim maiores mollitia voluptatem numquam possimus, illum modi molestiae iure fugit."
// let myActualTweet = myTweets.slice(0, 280);
// console.log(myActualTweet);
// console.log(myTweets.length);

// =======================================

// 6.4.2) The substring() method 🙋‍♂️

// substring() is similar to slice()

// the difference is that substring() cannot accept
// negative index

// var str = "Apple, Banana, Kiwi";
// // let res = str.substring(0,5);  //starting se start hota hai, or ending ko include nhi krta, bakio ko deta hai
// let res = str.substring(0); //agr sirf starting se denge to pura end tak output milega
// console.log(res);

// 6.4.3) The substr method 🙋‍♂️
// It is also similar is slice()

// The difference is that the second parameter specifies the
// length of the extracted part

// var str = "Apple, Banana, Kiwi";
// // let res = str.substr(0, 4);  //means  last wala index include nhi hota
// let res = str.substr(-4);  //means yeh last ke 4 se start hokr deta hai
// console.log(res);

// 6.4.5) The replacing String Content

// String.prototype.replace(searchFor,replaceWith) 🙋‍♂️

// The replace method() replaces  a specified value with another
// value in a string;

// let myBioData = `I am arshdeep Singh`;
// let replaceData = myBioData.replace('arshdeep', 'ArshDeep');  //Note: yeh first ocurence jo get hoti hai usi ko change krta hai
// console.log(replaceData); //original string return krega
// console.log(myBioData);  // not change the original string

// Points to Remember
// 1. The replace() method does not change the string
// it is called on. It return a new String
// 2. By defaul, replace() method replaces only the first match
// 3. By default, the replace() method is case sensitive.
// Writing VINOD (with upper-case) will not work jo tha  vo hi ajega same

// 6.4.6) The Extracting String Content 👀

// there are 3 method for extracting string  characters:

// charAt(position)
// charCodeAt(position)
// property access []

// charAt() method 🙋‍♂️
// It return the character at specified index (position) in a string

// let str = `HELLO WORLD`;
// console.log(str.charAt(4));  // 4 positon pr 'O' hai

// charCodeAt() method 🙋‍♂️
// the charcode() method return the ascii value of the character at a specified index in a string

// the method returns a UTF-16 code
// (an integer between 0 and 65535), har character of UTF-8 unicode assign hota hai

// var str = 'HELLO WORLD';
// console.log(str.charCodeAt(0));

// ============== Challenge 11 ) ======================

// ques) return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

// =========================================================

// Property Access
// ECMAScript 5 (2009) allows propert [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[0]); //output -> H

// 6.4.7) Other Usefull method 👀

// 1)  toUpperCase() -> this method convert all the lower character to capital letter
// 2)  toLowerCase() -> this method convert all the capital character to lower letter
// 3) concat () -> this method is used to concat 2 strings -> so jo plus likhre the vo likhne ki need nhi hai

// let myName = "vinod Thapa";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// concat() method 🙋‍♂️
// concat () joins two or more strings
// jo pehle hum  + likh kr concat krre the vo need nhi hai abh
// Note:-> instead of this ECMA script way ` $ {} write the string `

// let fName = "vinod";
// let lName = "thapa";
// console.log(fName.concat(" ",lName));

// String.trim() 🙋‍♂️
// the trim() method removes the whitespace from both side of a string
// Note: it is mostly used in validations like form email, password
// so we want ki password ke left or right side me space na ho bikul vi so we use this

// var str = "               HelloWorld!!                     ";
// console.log(str.trim());

// converting a String to an Array

// A string can be converted to array with the split() method
// it return a Array jisme sari value hongi array me  or ( isme likhna hai kis basis pr convert krwana hai)

// var txt = "a, b,c d, e";
// // console.log(txt.split());
// console.log(txt.split(",")); // means jidr jidr comma usko ik element count krega or seperate krega using comma
// console.log(txt.split(" ")); //
// console.log(txt.split("|"));  // pipe ke pehle ik element or uske baad dusra element

/***** Section- 8) Date and Time in Object (7:40 min) *****/

// Date objects conatins a Number that represent miilisecond
// since 1 january 1970 UTC

// 👀 Creating Date Objects
// There are Four ways to create a new date object:

// new Date()
// new Date(year, month, day, hour, minute, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
//  we can not avoid month section
// new Date(date string)

//1)  new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor

// let currDate = new Date();
//normally we use this because 1 hi object se date and time dono milta hai, copy and paste it on google inspect
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString()); // full perfect timming jo inspect krke milra tha

// 2) Date.now() 🙋‍♂️
// Return the numeric value corresponding to the current time- the number
// of  milliseconds elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now());  // date.now() yeh return krta hai miliseconds since january 1970

// 3) new Date (year,mongth,day,hr,min,sec,milisec) 🙋‍♂️
// 3rd way to create date and time
// Interview Ques -> they ask ki month ka count likhre honge vo bol skte
// hai ki Dec ka month likh kar dikhao
// NOTE -> [javascript counts months from 0 to 11]

// january is 0. dec is 11.

// var d = new Date(2022, 7, 30, 10, 10, 10, 00);
// console.log(d.toLocaleString());

// 4) new Date (dateString) 🙋‍♂️
// 4th way to declare date and time now
// new Date (dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// 5) new Date (milliseconds) 🙋‍♂️
// new Date (milliseconds) creates a new date object, means isme hum apne seconds paas krke set krskte hai date

// console.log(Date.now());
// var d = new Date(0); //Note: when we paas 0 to 7 parameter wala assume krta hai, so to sirf year dalne se wrong date aati hai
// // var d = new Date(1609574532475);
// console.log(d.toLocaleString());

// 👀 Dates method

// const currDate = new Date();

// how to get the individual date
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// how to set the individual date
// console.log(currDate.setFullYear(2022));
// console.log(currDate.setFullYear(2022, 10, 5));

// NOTE -> jo bhi seter hai vo sab milliseconds me answer deta hai

// 👀 Times Method

const currTime = new Date();
// console.log(currTime.toLocaleString());
// console.log(currTime.getTime());  //it gives in milliseconds
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// how to st the individual time 🙋‍♂️
// console.log(currTime.setTime());
console.log(currTime.setHours(5));
console.log(currTime.setMinutes(5));
console.log(currTime.setSeconds(5));
console.log(currTime.setMilliseconds(5));
