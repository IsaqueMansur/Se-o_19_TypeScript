/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 3] */

export class People {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getCompletName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Student extends People {
  getCompletName(): string {
    return `Aluno: ${this.name} ${this.lastName}`;
  }
}

export class Client extends People {}

const student1 = new Student('Isaque', 'Mansur', 22, '157-191-376-96');
const client1 = new Client('Isaque', 'Mansur', 22, '157-191-376-96');
const people1 = new People('Isaque', 'Mansur', 22, '157-191-376-96');
console.log(student1.getCompletName());
console.log(client1);
console.log(people1);
