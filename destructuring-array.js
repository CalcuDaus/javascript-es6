// array destructuring atau memecah array

// contoh
let myArray = ["daus", "nisa", "praja"];

// contoh pemecahan biasa
let arrayKe1 = myArray[0];
let arrayKe2 = myArray[1];
let arrayKe3 = myArray[2];

console.log(arrayKe1);
console.log(arrayKe2);
console.log(arrayKe3);

// contoh pemecahan dengan array destructuring
let [arrayDes1, arrayDes2, arrayDes3] = myArray;

console.log(arrayDes1); // daus
console.log(arrayDes2); // nisa
console.log(arrayDes3); // praja

// jika ingin mengambil sebagian nilai dari sebuah array
// contoh ingin mengambil array ke tiga dari index ke 2 pada array myArray
let [, , arrayDesKe3] = myArray;

console.log(arrayDesKe3); // praja
