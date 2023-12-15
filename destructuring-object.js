// object destructuring atau memecah object

// sebelum es6

const myObject = {
  nama: "daus",
  kelas: "XII",
  umur: 17,
};
// sebelum es6 jika kita ingin memecah atau mengambil sebagian nilai object
const nama1 = myObject.nama;
const kelas1 = myObject.kelas;
const umur1 = myObject.umur;

console.log(nama1);
console.log(kelas1);
console.log(umur1);

// jika menggunakan object destructuring es6
// dapat langsung mengguakan kurung kurawal
// dengan catatan nama variabel dari pecahan object harus indentik atau sama dengan nama propeti para object itu sendiri
const { nama, kelas2, umur } = myObject;

console.log(nama);
console.log(kelas2); // output akan menjadi undefined dikarenakan nama variabel pemecah berbeda dengan nama properti pada object
console.log(umur);

// bagaimana jika ingin mengganti nama pemecah agar berbeda dengan nama dari object?
// const { nama: newNama, kelas: newKelas, umur: newUmur } = myObject;

// console.log(newNama); // daus
// console.log(newKelas); // XII
// console.log(newUmur); // 17
