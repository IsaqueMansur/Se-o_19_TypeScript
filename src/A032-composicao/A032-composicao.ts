/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

export class Engine {
  powerOn(): void {
    console.log('Motor ligado');
  }

  powerOff(): void {
    console.log('Motor desligado');
  }

  speedUp(): void {
    console.log('Motor acelerando');
  }

  brake(): void {
    console.log('Motor freiando');
  }
}

export class Car {
  private readonly engine = new Engine();

  powerOn(): void {
    this.engine.powerOn();
  }

  powerOff(): void {
    this.engine.powerOff();
  }

  speedUp(): void {
    this.engine.speedUp();
  }

  brake(): void {
    this.engine.brake();
  }
}

const car1 = new Car();
car1.powerOn();
car1.speedUp();
car1.brake();
car1.powerOff();
