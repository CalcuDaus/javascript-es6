// contoh penggunaan async dan await
const makeCoffe = () => {
  return new Promise((resolve, reject) => {
    const coffe = 100;

    if (coffe >= 10) {
      resolve("Kopi Berhasil didapatkan !");
    } else {
      reject("Kopi Gagal didapatkan");
    }
  });
};

// contoh penggunaan biasa promise

const getCoffe = () => {
  makeCoffe()
    .then((coffe) => {
      console.log(coffe);
    })
    .catch((err) => {
      console.log(err);
    });
};


getCoffe();

// contoh penggunaan async dan await

async function getCoffe2(){
    const coffe = await makeCoffe();
    console.log(coffe);
}

getCoffe2();