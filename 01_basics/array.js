// array

// const myarr=[1,2,3,4,5]
// console.log(myarr);
// myarr.push(9);// will add at the last of array
// myarr.push(9);
// myarr.pop()// will delete at last of array
// myarr.pop()
// myarr.unshift(9);// will add in start of array


// console.log(myarr);
// myarr.shift()// will delete at start of array
// console.log(myarr);
// const newArr = myarr.join()// converts array in to string
// const newArr = myarr.slice(1,-2)// slice doesn't manipulate the original array 
// console.log(myarr);
// console.log(newArr);// index from 1 and 2 will be included
// const newArr = myarr.splice(1,3)// splice manipulate the original array 
// console.log(myarr);
// console.log(newArr);// index from 1 and 3 will be included and elements from old array will be removed


// const arrPrac = new Array(1,8,5,6,5)
// console.log(arrPrac);

// arrPrac.push(newArr)// will push in existing array
// console.log(arrPrac);//[ 1, 8, 5, 6, 5, [ 2, 3 ] ] gives arr under arr. array takes any data  
// const conArr = arrPrac.concat(myarr) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(conArr);
// instead of using conct we use spread operator 
// const spArr = [...arrPrac , ...myarr , ...newArr]
// console.log(spArr);

const myarr = [1,2,3,4,[1,2,[1,2,9,[44,45]],10]]
const arrr= [1,2,3]
console.log(arrr);

console.log(myarr);
// const arr = myarr.flat(Infinity);
const arr = myarr.flat(2);
console.log(arr);
console.log(Array.from("I can do it"));
console.log(Array.from({name : "I can do it"}));



