// rest parameter adalah kebalikan dari spreading operator yaitu menggabungkan beberapa parameter menjadi sebuah array baru
// contoh

function sum(...values) {
  // menggabungkan tipe data apapun menjadi sebuah array baru
  let r = 0;
  values.forEach((value) => {
    r += value;
  });
  return r;
}

console.log(sum(1, 2, 3, 4, 5)); // akan digabungkan oleh rest parameter [1,2,3,4,5];

// rest parameter juga dapat digunakan untuk mengambil sisa array destructuring
// contoh
const items = [
  "Samsung",
  "Advan",
  "Mito",
  "Evercross",
  "Mi",
  "Poco",
  "Oppo",
  "Lenovo",
];

const [item1, item2, ...remaining] = items;
console.log(item1); // Samsung
console.log(item2); // Advan
console.log(remaining); // ["Mito","Evercross", "Mi","Poco","Oppo","Lenovo"]
