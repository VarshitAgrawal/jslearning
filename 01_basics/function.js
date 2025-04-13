// Conversions and operations
let score = 33;
console.log(typeof score);
console.log(typeof (score));

// NAN==> not a number
let convert = String(score)
console.log(typeof convert);
console.log(convert);

let core = "33abc"
console.log(typeof score);
console.log(typeof (score));

// NAN==> not a number
let conver = Number(core)
console.log(typeof conver);
console.log(conver);

// undefined ==> NaN
// null ==> 0
// core ==> NAN
// if string can't be convert into number we will get NAN
// "33"==> 33
// "33abc"==> NAN 
// true == 1
// 1 will convert to true ; 0 = false
// ""=> false ; "abc"=> true

// we will use the conversion in the forms as browser gives data in String

