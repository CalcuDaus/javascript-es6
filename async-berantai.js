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


  async function pesanKopi(type,miligrams){
    try {
        const getseed = await getSeeds(type,miligrams);
        const coffe = await makeCoffe(getseed);
        const result = await servingToTable(coffe);
        console.log(result);

    } catch (error) {
        console.log(error)
    }
  }


  pesanKopi("arabica",2)