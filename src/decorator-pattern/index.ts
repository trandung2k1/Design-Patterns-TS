class MyCar {
    public price: number;
    constructor() {
        this.price = 10000;
    }

    getPrice() {
        return this.price;
    }
}

class CarOptions {
    public car: MyCar;
    constructor(car: MyCar) {
        this.car = car;
    }

    addGPS() {
        this.car.price += 500;
    }

    addRims() {
        this.car.price += 300;
    }
}

const basicCar = new MyCar();

console.log(basicCar.getPrice()); // 10000

const carWithOptions = new CarOptions(basicCar);

carWithOptions.addGPS();
carWithOptions.addRims();

console.log(carWithOptions.car.getPrice()); // 10800
