// Declaring arrays.

let array1 = [];

let array2 = new Array();

// arrays can store elements of any type
array1 = [1, "emmanuel", true, function name() {}, { name: "john" }];

// console.log(array1.at(-1));

// console.log(array1.at()); // same as index 0

array1.push(Symbol({ age: 2 })); // add to the end

// console.log(array1.pop()); // removes the last element and returns it

array1.push(BigInt(1e2));

// console.log(array1.shift()); // removes first element from the list and returns it. if list is empty returns undefined

array1.unshift("Peace");

let array3 = array1; // reference copying

// for (let x = 0; x < array3.length; x += 1) {
//   console.log(array3[x], x);
// }

// for (let x of array3) {
//   // also in since array is an object but now x is an index rather than element
//   // also
//   console.log(x);
// }

// truncate an array

array3.length = 4;

// console.log(array3);

let arr = new Array("Apple", "Pear", "Mango", "Peach", "Melon");

//NOTE: new Array(3) will create an array of 3 undefined elements and not [3]

// multi dimensional arrays

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][0]);

// console.log(matrix.at(0).at(1));

// console.log(arr.slice(1, 2)); // returns a copy of the section

// console.log(arr.splice(1, 2, "Papaya", "Pineapple"));

// console.log(arr);

// console.log(
//   arr.concat({
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
//   })
// );

// console.log(arr.lastIndexOf("Apple"));

let arr1 = [1, 3, 4, 2, 6, 7, 8];

let arr2 = [{ name: "melon" }, { name: "zebra" }, { name: "orange" }];

// console.log(
//   arr2.sort((a, b) => {
//     console.log(a.name.charCodeAt() - b.name.charCodeAt(), a.name, b.name);
//     return a.name.charCodeAt() - b.name.charCodeAt();
//   })
// );

// const sum = arr1.reduce((prev, curr) => prev + curr, 0);

// [2] + 3; // will automatically change the array to a string and append the 3

// const board = [
//   ["_", "_", "_"],
//   ["_", "_", "_"],
//   ["_", "_", "_"],
// ];

// board[0][0] = "X";
// board[2][2] = "O";
// board[1][2] = "X";
// board[1][0] = "O";
// board[0][2] = "X";

// for (const element of board) {
//   console.log(element.join(" "));
// }
