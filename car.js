// Implement the Car class that adheres to the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize make, model, and year
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2022);
// Call the start method on the instance
myCar.start(); // This should log "Car engine started" to the console
