// template literals javascript pada es6

// sebelum es6
const katakanHalo = (nama) => {
  return "Halo " + nama + ", Selamat siang !";
};

// template literals es6
const sayHello = (name) => {
  return `Hello ${name}, Good Morning !`;
};

console.log(katakanHalo("Daus"));
console.log(sayHello("Daus"));
