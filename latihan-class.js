// latihan class penerapan inheritance , static method
class Kendaraan {
  constructor(nomorKendaraan, produksi, jenis) {
    this.nomorKendaraan = nomorKendaraan;
    this.produksi = produksi;
    this.jenis = jenis;
    this.Menyala = false;
  }
  mesinMenyala() {
    console.log(
      `Mesin Kendaraan ${this.jenis} dengan plat nomor ${this.nomorKendaraan} Menyala!!!`
    );
    this.Menyala = true;
  }

  info() {
    console.log(`Nomor Kendaraan : ${this.nomorKendaraan}`);
    console.log(`Produksi : ${this.produksi}`);
    console.log(
      `Mesin Menyala : ${this.Menyala ? "Menyala" : "Tidak Menyala"}`
    );
  }
  parking() {
    console.log(`Nomor Kendaraan ${this.nomorKendaraan} Parkir !`);
  }
}

class KendaraanDarat extends Kendaraan {
  constructor(nomorKendaraan, produksi, roda, jenis) {
    super(nomorKendaraan, produksi, jenis);
    this.roda = roda;
  }
  melaju() {
    console.log(
      `Kendaraan darat dengan plat nomor ${nomorKendaraan} Melaju !!!`
    );
  }
  // override method
  info() {
    super.info();
    console.log(`Jumlah Roda : ${this.roda}`);
  }
}

class KendaraanUdara extends Kendaraan {
  constructor(nomorKendaraan, produksi, jenis) {
    super(nomorKendaraan, produksi, jenis);
  }

  takeOff() {
    console.log(
      `Kendaraan udara dengan plat nomor ${nomorKendaraan} lepas landas`
    );
  }
}

class Car extends KendaraanDarat {
  constructor(nomorKendaraan, produksi, roda, jenis) {
    super(nomorKendaraan, produksi, roda, jenis);
  }
  bukaPintu() {
    console.log(`Pintu Mobil Dibuka !`);
  }
}

class MotorCyle extends KendaraanDarat {
  constructor(nomorKendaraan, produksi, roda, jenis) {
    super(nomorKendaraan, produksi, roda, jenis);
  }
  jemping() {
    console.log(`Motor Jemping !!`);
  }
}

class Plane extends KendaraanUdara {
  constructor(nomorKendaraan, produksi, sayap, jenis) {
    super(nomorKendaraan, produksi, jenis);
    this.sayap = sayap;
  }

  nyalakanJet() {
    console.log(`Jet Pesawat Dinyalakan`);
  }

  //override method
  info() {
    super.info();
    console.log(`Jumlah Sayap Pesawat : ${this.sayap}`);
  }
}

class Helicopter extends KendaraanUdara {
  constructor(nomorKendaraan, produksi, balingBaling, jenis) {
    super(nomorKendaraan, produksi, jenis);
    this.balingBaling = balingBaling;
  }

  // override method
  info() {
    super.info();
    console.log(`Jumlah baling-baling : ${this.balingBaling}`);
  }
}

// static function
class BengkelSerbaBisa {
  static perbaiki(kendaraan) {
    kendaraan.forEach((ken) => {
      console.log(
        `Kendaraan ${ken.jenis} Dengan Plat Nomor ${ken.nomorKendaraan} Sedang Dalam Perbaikan`
      );
    });
  }
}

// instace dari semua class turunan

const mobilDaus = new Car("BK 2423 JSD", "Honda", 4, "Mobil Civic");
const motorDaus = new MotorCyle("BK 5114 SD", "Honda", 2, "Motor Vario");
const pesawatDaus = new Plane(
  "H2342H",
  "Garuda Indonesia",
  2,
  "Pesawat Air Jet"
);
const heliDaus = new Helicopter("J34S3", "X Factor", 6, "Heli Tempur");

mobilDaus.mesinMenyala();
motorDaus.mesinMenyala();
pesawatDaus.mesinMenyala();

mobilDaus.info();
motorDaus.info();
heliDaus.info();
pesawatDaus.info();

BengkelSerbaBisa.perbaiki([heliDaus]);


