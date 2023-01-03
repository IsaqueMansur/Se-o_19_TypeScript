/* eslint max-classes-per-file: ["error", 3] */
/* eslint no-useless-constructor: 0 */

export class Contribuitor {
  constructor(
    readonly name: string,
    readonly office: string,
    readonly age: number,
  ) {}
}

export default class Organization {
  private readonly name: string;

  protected readonly contributors: Contribuitor[] = [];

  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addContribuitor(contribuitor: Contribuitor): void {
    this.contributors.push(contribuitor);
  }

  public showContribuitors(): void {
    this.contributors.map((contribuitor) => console.log(contribuitor));
  }

  getName(): string {
    return this.name;
  }
}

export class Artvac extends Organization {
  constructor() {
    super('Artvac', '12345678912345');
  }

  popContribuitor(): Contribuitor | null {
    const contribuitor = this.contributors.pop();
    if (contribuitor) return contribuitor;
    return null;
  }
}

const org1 = new Artvac();
const contribuitor1 = new Contribuitor('Isaque', 'Desenvolvimento de sistemas', 22);
const contribuitor2 = new Contribuitor('José', 'Eletricista', 37);
const contribuitor3 = new Contribuitor('Cleyton Rasta', 'DJ', 97);
org1.addContribuitor({ ...contribuitor1 });
org1.addContribuitor({ ...contribuitor2 });
org1.addContribuitor({ ...contribuitor3 });
org1.showContribuitors();
org1.popContribuitor();
console.log(org1);
