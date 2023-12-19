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

async function getCoffe() {
  try {
    const coffe = await makeCoffe();
    console.log(coffe);
  } catch (error) {
    console.log(error);
  }
}

getCoffe();

