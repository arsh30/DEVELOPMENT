console.log("this is tut 27");

// obejct literal for creating objects
let car = {
  name: "maruti 800",
  topSpeed: 80,
  run: function () {
    console.log("car is running");
  },
};

// we already seen constructors like these:
// new Date();

// creating constructor for cars
function GeneralCars(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed} km/H than mercedees`
    );
  };
}

// creating objects from constructor
let car1 = new GeneralCars("Nissan", "180");
let car2 = new GeneralCars("Maruti", "80");
let car3 = new GeneralCars("Mercedes", "200");

console.log(car1, car2, car3);

// why we use OOPS ?
// sol
