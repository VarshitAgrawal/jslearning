const date = new Date
console.log(date); //2025-04-24T20:36:55.328Z
console.log(date.toLocaleDateString());// 4/24/2025
console.log(date.toDateString());// Thu Apr 24 2025


// new way to declare the date ==>
// const myDate = new Date(23, 0 ,24 )
// console.log(myDate.toDateString()); //Wed Jan 24 1923
const myDate = new Date("01-22-2025" )
console.log(myDate.toDateString()); //Wed Jan 24 1923
console.log(myDate.toLocaleDateString()); // 1/22/2025
console.log(myDate.toLocaleString()); // 1/22/2025, 12:00:00 AM 

// date and time in miliseconds

let myTime = Date.now();
console.log(myTime);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));// milisecond to second
console.log(myDate.getMonth()+1);
console.log(myDate.getMonth());

