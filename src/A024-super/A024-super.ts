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
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public course: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getCompletName(): string {
    console.log('Fazendo algo antes');
    const result = super.getCompletName();
    return `${result} Heyy`;
  }
}

export class Client extends People {}

const student1 = new Student('Isaque', 'Mansur', 22, '157-191-376-96', 'Ciência da computação');
console.log(student1);
