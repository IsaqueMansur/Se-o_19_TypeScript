/* eslint no-useless-constructor: 0 */

export default class People {
  private static initialAge = 0;

  private static initialCpf = '000-000-000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPeople(name: string, lastName: string): People {
    return new People(name, lastName, People.initialAge, People.initialCpf);
  }
}

const people1 = new People('Isaque', 'Mansur', 22, '157-191-376-96');
const people2 = People.createPeople('Isaque', 'Mansur');
console.log(people1);
console.log(people2);
