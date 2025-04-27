// const num = 100;
// console.log(num);


// const num = new Number(200.52);
// console.log(num);
// console.log(num.toString().length);
// console.log(num.toPrecision(3));
// console.log(num.toFixed(2));
// console.log(typeof(num));
// O/P ->

// [Number: 200.52]
// 6
// 201
// 200.52
// object

const num = 2000000000;
console.log(num.toLocaleString());// 2,000,000,000 will convert according to us standards
console.log(num.toLocaleString('en-IN'));// 2,00,00,00,000 will convert according to indian standards

// Maths Lib ==>
  console.log(Math);
  console.log(Math.ceil(5.6));// here ceil meaning top floor so output willbe 5
  console.log(Math.floor(8.5)); // here o/p will be floor so 9
  console.log(Math.round(4.6));
  console.log(Math.abs(-5));// use to convert - to plus
    