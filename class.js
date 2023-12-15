// contoh penggunakan OPP dalam bentuk function constructor sebelum es6

function Car(manufacture, color) {
  this.manufacture = manufacture;
  this.color = color;
  this.enginesActive = false;
}

Car.prototype.startEngines = function () {
  console.log("Mobil dinyalakan...");
  this.enginesActive = true;
};

Car.prototype.info = function () {
  console.log("Manufacture: " + this.manufacture);
  console.log("Color: " + this.color);
  console.log("Engines: " + (this.enginesActive ? "Active" : "Inactive"));
};

let dausCar = new Car("Honda", "White");
dausCar.info();

// penggunaan OOP dengan keyword class
class Motorcyle {
  constructor(manufacture, color) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
  }

  startEngines() {
    console.log(`Motor Menyala...`);
    this.enginesActive = true;
  }

  info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color : ${this.color}`);
    console.log(`Engines : ${this.enginesActive ? "Active" : "Inactive"}`);
  }
}

const dausMotor = new Motorcyle("Honda", "White");
dausMotor.startEngines();
dausMotor.info();
