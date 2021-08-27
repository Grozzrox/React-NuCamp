import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class Car {
  constructor(make, model, year, topSpeed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.topSpeed = topSpeed;
  }
  goFast() {
    console.log(`The ${this.year} ${this.make} ${this.model} can go a top speed of ${this.topSpeed} mph!`);
  }
}

class Bike extends Car {
  constructor(make, model, year, topSpeed, color) {
    super(make, model, year, topSpeed);
    this.color = color;
  }
  vroom() {
    console.log(`The ${this.color} ${this.make} goes vroom vroom down Route 66 at a speed of ${this.topSpeed} mph.`);
  }
}

const camry = new Car("Toyota", "Camry", 2001, 120);
const harley = new Bike("Harley Davidson", "Motorcycle", 2020, 160, "black");

console.log(camry.goFast());
console.log(harley.vroom());


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export { Car, camry };
export default App;
