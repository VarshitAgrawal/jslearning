// // singleton 
// // if declared from constructor then it is a singleton

// // object literals

// // const vadr = {
// //     name : 'varshit',
// //     age : 26,
// //     location : 'Indore',
// //     email: 'var@gmail.com'
// // }
// // console.log(vadr.name);
// // console.log(vadr['name']);

// //  interview question define a symbol and use this is obj
// const vars = Symbol("shit")
// const vadr = {
//     name : 'varshit',
//     // vars : 'varsht',
//     [vars] : "varshitt",
//     age : 26,
//     location : 'Indore',
//     email: 'var@gmail.com'
// }
// // console.log(vadr.vars);
// // console.log(typeof(vadr.vars));// type of string
// // console.log(vadr[vars]);
// // console.log(typeof[vars]);
// // vadr.name= 'varshit@gmail';
// // console.log(vadr['name']);
// // Object.freeze(vadr)// used to freeze the object so that the user can not modify the object
// // vadr.name= 'varshit@gil';
// // console.log(vadr['name'])
//     console.log(vadr);
//     vadr.objfunction = function() {
//     console.log("Hello varshit");
            
//     }
//     console.log(vadr.objfunction());
//     console.log(vadr);
    
//  const tinder = new object() // singleton object
const tinder = {} //non singleton object
tinder.id = '123';
tinder.userName= "varshit"
tinder.pwd = 'vars123'
tinder.addresss= {
    permanentAddress: {
        tempAddress:{
            houseno: '123'
        }
    }
}
// console.log(tinder);
// console.log(tinder.addresss.permanentAddress.tempAddress.houseno);
// console.log(tinder.addresss?.permanentAddress?.tempAddress.houseno);// ? is optional chaining ?. is used to safely access deeply nested properties without causing a runtime error if any intermediate value is null or undefined.
// const obj2 = {
//     1: 'a',
//     2: 'b'
// }
// const obj3 = {
//     3: 'a',
//     4: 'b'
// }

// const obj4 = {...obj2 , ...obj3
// }
// console.log(obj4);
// console.log(Object.keys(obj4));//[ '1', '2', '3', '4' ]
// console.log(Object.values(obj4));//[ 'a', 'b', 'a', 'b' ]
// console.log(Object.entries(obj4));//[ 'a', 'b', 'a', 'b' ]
// console.log(obj4.hasOwnProperty('1'));//[ 'a', 'b', 'a', 'b' ]

// Destructioning of obj in JS 
// console.log(tinder);
console.log(tinder.addresss);
// instead of calling with . we can use destructureing

const {addresss: add} = tinder// here we are trying to access the object address which is stored in tinderso that winstread of calling with . we can directly access the log with same or different variable

console.log(add);
// react

const navbar = ({name}) => {// {name} = we are using destructuring

}
navbar(name = "varshit")
// The purpose of destructuring objects in JavaScript is to extract values from objects and assign them to variables in a clean, readable, and concise way.
// API 





