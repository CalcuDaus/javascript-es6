// untuk import module kita bisa gunakan require 

// const { isOvenReady } = require("./state");

// const toppingStock = require('./state.js');

// console.log(toppingStock);

// contoh untuk import banyak nilai dari data yang diexport dapat menggunakan object destructuring

// contoh

const {toppingStock,isOvenReady} = require('./state') 

console.log(isOvenReady);