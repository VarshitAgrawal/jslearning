// Porblem stateMent -->
// We have a string xyz we need to find the vowels and constant Here context is when you are searching for vowels and constant you need to print the vowels first and then the constant that too in new line
// Ex --> Varshit
// O/P->
// a
// i
// V
// r
// s
// h
// t

// Solution-->

const Myname = 'varshit'
const vowel = 'aeiouAEIOU' // HERE for safety we are taking the vowels in small and capital letter as user can give the string in any of the case 

const charsArr = [...MyName];
const myVowels  = charsArr.filter(c => vowels.includes(c));
const myConsonants  = charsArr.filter(c => !vowels.includes(c));

[...myVowels, ...myConsonants].forEach(c => console.log(c));

// Approach 1==>

// const word = "varshit";
// const vowels = "aeiouAEIOU";

// const chars = [...word];

// const vowelChars = chars.filter(c => vowels.includes(c));
// const consonantChars = chars.filter(c => !vowels.includes(c));

// [...vowelChars, ...consonantChars].forEach(c => console.log(c));

// Approach 2 ==>
//     const word = "varshit";

// // Define vowels
// const vowels = "aeiouAEIOU";

// // Arrays to store vowels and consonants
// let vowelChars = [];
// let consonantChars = [];

// // Split string into characters and classify
// for (const char of word) {
//     if (vowels.includes(char)) {
//         vowelChars.push(char);
//     } else {
//         consonantChars.push(char);
//     }
// }

// // Print vowels first
// vowelChars.forEach(c => console.log(c));

// // Print consonants next
// consonantChars.forEach(c => console.log(c));


