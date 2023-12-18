// Promise
// Objek dalam javascript untuk menangani operasi asyncronous
// yang mengembalikan 3 nilai yaitu
// pending = ketika hasil sedang dalam proses
// fullfield = ketika hasil berhasil atau terpenuhi
// rejected = ketika hasil ditolak atau tidak terpenuhi

// contoh penggunaan object promise
const executorPromise = (resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Hasil Berhasil Terpenuhi !");
  } else {
    reject("Hasil Ditolak !");
  }
};

// membuat object promise
const cobaPromise = new Promise(executorPromise);

console.log(cobaPromise);
// untuk menghasilkan nilai sebenarnya dari resolve // gunakan then
// untuk reject // gunakan catch

cobaPromise
  .then((hasil) => console.log(hasil))
  .catch((hasil) => console.log(hasil));
