/* eslint max-classes-per-file: ["error", 2] */
/* eslint no-useless-constructor: 0 */

export class Contribuitor {
  constructor(
    readonly name: string,
    readonly office: string,
    readonly age: number,
  ) {}
}

export default class Organization {
  public readonly name: string;

  private readonly contributors: Contribuitor[] = [];

  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addContribuitor(contribuitor: Contribuitor): void {
    this.contributors.push(contribuitor);
  }

  showContribuitors(): void {
    this.contributors.map((contribuitor) => console.log(contribuitor));
  }
}

const org1 = new Organization('Artvac', '12345678912345');
const contribuitor1 = new Contribuitor('Isaque', 'Desenvolvimento de sistemas', 22);
const contribuitor2 = new Contribuitor('José', 'Eletricista', 37);
org1.addContribuitor({ ...contribuitor1 });
org1.addContribuitor({ ...contribuitor2 });
org1.showContribuitors();
