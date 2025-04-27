// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);
// avoid this type of conversion

// ===
// strict type check

// Data types -->
// Primitive == int, long int , str, boolean, null , undefined , symbol (call by value)
// Non primitive == (Reference type)  Array , objects, functions
// javascript is dynamics typed language
// in typescript 
// const score: number= 1

// const id = Symbol('123')
// const constid = Symbol('123')
// console.log(id===constid);
// console.log(typeof(id));
// console.log(typeof(constid));

// const vars = null;
// console.log(typeof vars); // it will give object when pointing null due to ecma script
// undefined = undefined
// null = Object
// Boolean = Boolean
// Number = Number
// String = String

// for nonprimitive typeof is function 
// and in case of funtion the function object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// const arr = ['v','a','r']

// console.log(typeof arr);



 
// const myfuntion= function(){
//     console.log("hello word");
    
// }
// console.log(typeof(myfuntion));// it will give object function as type



// Memory ==> Stack (primitive type) in stack we will get the copy of object, Heap(non primitive type) in heap memory will get reference
// Primitive data type example
let name1 ='varshit'
let name2 =  name1;
name2= 'agrawal'

// so now in stack 1> name1 2> name2 3> name1 it will give the copy of the object
// console.log(name1);
// console.log(name2);

// non primitive type exapmle --> {
//     userName : "varshit",
//     dob : "24-11-1999"
// } this whole code will move to heap and user , user2 are pointing to the same reference so copy is not created

let user = {
    userName : "varshit",
    dob : "24-11-1999"
}

let user2 = user

// user2 = {
//     userName: "agrawal"
// }
// user2.userName = "agrawal"
// console.log(user);
// console.log(user2);


// string interpolation 

console.log(`this is varshit agrawal first name ${user.userName} and DOB ${user.dob}`);


//  New way to declare the string

const sttring = new String("Varshit")
console.log(sttring);
console.log(sttring.charAt(2));// r
console.log(sttring.indexOf("V"));// 0
console.log(sttring.indexOf("v"));// -1
console.log(sttring.toUpperCase());// 

const strings=  sttring.slice(-8 , 4)
console.log(strings);

const string2=  sttring.substring(0 , 4)
console.log(string2);

const stringEx = "   agr  "
console.log(stringEx);

console.log(stringEx.trim());// IT IS BASICALLY USED WHEN THE USER ENTER THE INPUT FIELDS AND BY MISTAKKENLY HE ENTERS THE SPACE ANS 
// WE DONT WANT THE SPACE TO BE SHARED IN THE DATA BASE

const URL  = "www.ggogle/%20.com"
console.log(URL.replace("/%20" ,""));

console.log(URL.includes("varshit"));// will return true or false 
const split = URL.split(".")
console.log(split[0]);
console.log(split);

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed


// 🏷️ Regex Flags
// Flags modify the behavior of the regex:​
// MDN Web Docs
// +1
// FreeCodeCamp
// +1
// FreeCodeCamp

// g: Global search (find all matches).

// i: Case-insensitive search.

// m: Multi-line search.

// s: Allows . to match newline characters.

// u: Enables full Unicode support.

// y: Sticky search; matches starting at the current position in the target string.


