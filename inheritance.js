class Vehicle {
  constructor(licencePlate, manufacture) {
    this.licencePlate = licencePlate;
    this.manufacture = manufacture;
    this.enginesActive = false;
  }

  startEngines() {
    console.log(`Mesin Kendaraan ${this.licencePlate} menyala...`);
    this.enginesActive = true;
  }

  info() {
    console.log(`Manufacture : ${this.manufacture}`);
    console.log(`Nomor Kendaraan : ${this.licencePlate}`);
    console.log(`Engines : ${this.enginesActive ? "Active" : "Inactive"}`);
  }

  parking() {
    console.log(`Kendaraan dengan plat nomer ${this.licencePlate} Parkir!`);
  }
}

class Car extends Vehicle {
  constructor(licencePlate, manufacture, wheels) {
    super(licencePlate, manufacture); // mengirim argument ke parent class
    this.wheels = wheels;
  }

  droveOff() {
    console.log(`Mobil Dengan plat ${this.licencePlate} Melaju !`);
  }

  stop() {
    console.log(`Mobil Berhenti ! `);
  }

  // override method dari parent class
  info() {
    super.info(); // ini sama saja dengan kita memanggil method info dari parent class yaitu Vehicle
    console.log(`Jumlah Roda : ${this.wheels}`);
  }
}

// motorcyle version
class MotorCyle extends Vehicle {
  constructor(licencePlate, manufacture, wheels) {
    super(licencePlate, manufacture);
    this.wheels = wheels;
  }

  doWheelie() {
    console.log("Jemping Cuyyyy !!!");
  }
  // override method dari parent class
  info() {
    super.info(); // === Vehicle.info()
    console.log(`Jumlah Roda : ${this.wheels}`);
  }
}

class VehicleFactory {
  // contoh static method
  static repair(vehicles) {
    vehicles.forEach((vehicle) => {
      console.log(
        `Kendaraan dengan Plat Nomor ${vehicle.licencePlate} Sedang Melakukan Perawatan !`
      );
    });
  }
}

// inisialisasi instance class
const dausCar = new Car("BK 2313 KC", "Honda", 4);
const nisaCar = new Car("BK 2932 JS", "Lamborgini", 4);
const prajaCar = new Car("BK 9239 SF", "BMW", 4);
const dausMotor = new MotorCyle("BK 2934", "Honda", 2);

// contoh penggunaan static method
VehicleFactory.repair([dausCar, nisaCar, prajaCar]);

dausMotor.startEngines();
dausMotor.info();
