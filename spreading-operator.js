// sesuai nama nya yaitu spreading atau penyebaran

const favFruits = ["manggo", "banana", "watermelon", "durian"];

// kita dapat membentangkan array tersbut dengan menggunakan spread operator (...)
// contoh
console.log(...favFruits);

// kode di atas sama saja dengan kita menuliskan
console.log(favFruits[0], favFruits[1], favFruits[2], favFruits[3]);

// dapat digunakan untuk menggabungkan dua buah nilai array
// contoh
const diferrentFruits = ["jackFruit", "pinaple", "papaya"];

// const aLotFruits = [favFruits, diferrentFruits]; // ini akan dua array berbeda jika tidak menggunakan (...)
const aLotFruits = [...favFruits, ...diferrentFruits];

console.log(aLotFruits);
