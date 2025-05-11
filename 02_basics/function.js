// function lass(){
// console.log('a');

// console.log('a');
// console.log('a');
// console.log('a');
// }
// lass()

// // Anonymous Function
// let b = function(a,b){ 
//     const sum = a+b
//     return sum
// }
// console.log(b(2,6));

// // immediate invoke
// let c = function(a,b){
//     const sum = a+b
//     return sum
// }(2,6)
// console.log(c);
// // Arrow Function

// const f = (a,b) =>{
//     return a+b

// }
// console.log(f(2,3));

// CONST detailed-->
// declaring variables with const: The variable city is 
// declared with const, which does not allow reassignment. 
// The code will throw a Type
//  Error when trying to reassign “Los Angeles” to city.
// const city = "New York";
// city = "Los Angeles";
// console.log(city)

// Hoisting with const: The variable x is declared with const, 
// which is block-scoped and not hoisted. When console.log(x) 
// is called before the declaration, 
// it throws a Reference Error due to being in the Temporal Dead Zone (TDZ).

// console.log(x)
// 2
// const x=10

// LET==>
//  Hoisting with let: The code logs x before it is declared with let, 
// causing a Reference Error. 
// This happens because let variables are hoisted but not initialized, 
// so they remain in the TDZ until the declaration is executed.


// console.log(x)
// let x=10
// 1
// console.log(x)
// 2
// let x=10   

// declaring variables with let: The variable name is declared with let, 
// which allows reassignment but not re-declaration.
//  The final console.log(name) prints “Tanmay” after the reassignment and 
// variables are only accessible within the block
//  let name='Pranjal'
// name='Tanmay'
// console.log(name)



// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(2));
// use Case : when the user selects the item only 1 item price will be
//            passed 
// Issue : what is user selects the multiple items multiple values needs
//         to be stored

// Solution: we use rest operator it is similar to spread operator but name 
//           changes according to the usage.

function calculateCartPrice(...num1) // here ...num1 is used as rest operator
{
    return num1
}
console.log(calculateCartPrice(2 ,200,400,1000));// [ 2, 200, 400, 1000 ] it
//  converts the values in array so that multiple opration can be performed.

// How to pass the object in function

// const bar = {
//     name : "Berr",
//     Price: '50'
// }
//  1 Way
function restro(restromenu){
    console.log(`order received ${restromenu.name} and price ${restromenu.Price}`);   

}
// restro(bar);
// 2 Way 
restro({
   name : "Berr",
    Price: '50' 
});

//function using array

const arr=['1','2','3'];
function myarr(myarr){
    return myarr

}
console.log(myarr(arr));
;