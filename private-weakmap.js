class Car {
  constructor() {
    this.data = new WeakMap();
    this.data.set(this, {
      speed: 0
    });
  }

  speedUp() {
    const speed = this.data.get(this).speed + 1;
    this.data.set(this, { speed });
  }

  getSpeed() {
    return this.data.get(this).speed;
  }
}

const car = new Car();
console.log(car.getSpeed());
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
console.log(car.getSpeed());
