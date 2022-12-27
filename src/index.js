import React from "react";
import ReactDOM from "react-dom/client";

class Car {
  constructor(name) {
    this.name = name;
  }
  changeName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class CarModel extends Car {
  constructor(name, mod) {
    super(name);
    this.mod = mod;
  }
  changeMod(mod) {
    this.mod = mod;
  }
  getName() {
    return `${super.getName()} | ${this.mod}`;
  }
}

const myCar = new Car("Honda");
myCar.changeName("Margalla");

const carModel = new CarModel("Ford", "E350");

const myFirstElement = (
  <>
    <h1>{myCar.getName()}</h1>
    <h1>{carModel.getName()}</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myFirstElement);
