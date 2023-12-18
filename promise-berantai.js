const state = {
  isCoffeMakerReady: true,
  seedStocks: {
    arabica: 50,
    robusta: 40,
    liberica: 120,
  },
};

const getSeeds = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type]) {
      if (state.seedStocks[type] >= miligrams) {
        state.seedStocks[type] -= miligrams;
        resolve("Biji kopi tersedia");
      } else {
        reject("Biji kopi habis !");
      }
    } else {
      reject("Biji kopi tidak tersedia");
    }
  });
};

const makeCoffe = (seeds) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeMakerReady) {
      resolve("Kopi berhasil dibuat !");
    } else {
      reject("Mesin kopi sedang rusak !");
    }
  });
};

const servingToTable = (coffe) => {
  return new Promise((resolve) => {
    resolve("Kopi Berhasil dihidangkan");
  });
};

const reserveACoffe = (type, miligrams) => {
  getSeeds(type, miligrams)
    .then(makeCoffe)
    .then(servingToTable)
    .then((result) => console.log(result))
    .catch((reject) => console.log(reject));
};

// reserveACoffe("arabica", 10);



// example 2 

const bahan = {
    isOvenReady : true,
    topping :{
        tomat : 5,
        keju : 2,
        sosis : 2
    }
}

const ambilBahan = (topping,jumlah) => {
    return new Promise((resolve,reject)=>{
        if(bahan.topping[topping]){
            if(bahan.topping[topping] >= jumlah){
                bahan.topping[topping] -= jumlah;
                resolve("Varian Topping Tersedia");
            }else{
                reject("Varian Topping Habis !");
            }
        }else{
            reject("Varian pizza tidak tersedia !")
        }
    })
}

const masakPizza = () => {
    return new Promise((resolve,reject) => {
        if(bahan.isOvenReady){
            resolve("Pizza Sedang Di panggang !")
        }else{
            reject("Oven Sedang rusak !")
        }
    })
}

const berikanKePelanggan = () => {
  return new Promise((resolve,reject)=>{
    resolve("Pizza Siap Disantap !");
  })
}


const reserveAPizza = (topping,jumlah)=>{
  ambilBahan(topping,jumlah)
  .then(masakPizza)
  .then(berikanKePelanggan)
  .then(result => console.log(result))
  .catch(reject => console.log(reject))
}


reserveAPizza("tomat",2);