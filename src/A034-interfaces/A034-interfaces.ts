/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

interface TypeName {
  name: string;
}
interface TypeLastName {
  lastName: string;
}
interface TypeCompleteName {
  completeName(): string;
}

type TypePeople = TypeName & TypeLastName & TypeCompleteName;
interface TypePeople2 extends TypeName, TypeLastName, TypeCompleteName {}

export default class People implements TypePeople2 {
  constructor(public name: string, public lastName: string) {}

  completeName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const people1 = new People('Isaque', 'Mansur');
console.log(people1.completeName());
