interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

function App() {
  const myCar = new Car("Toyota", "Corolla", 2020);

  myCar.start();

  return (
    <div>
      <h1>TypeScript Fundamentals</h1>
      <p>Check the console for the Car engine start message!</p>
    </div>
  );
}

export default App;
