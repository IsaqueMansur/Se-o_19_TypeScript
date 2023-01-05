/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

type TypePeople = {
  name: string;

  lastName: string;

  completeName(): string;
}

export default class People implements TypePeople {
  constructor(public name: string, public lastName: string) {}

  completeName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const people1 = new People('Isaque', 'Mansur');
console.log(people1.completeName());
