class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, type) {
        super(brand, model);
        this.type = type;
    }

    info() {
        return `Bike: Brand - ${this.brand}, Model - ${this.model}, Type - ${this.type}`;
    }
}