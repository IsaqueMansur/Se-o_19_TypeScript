/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */

export default class Writer {
  private _tool: Tool | null = null; //eslint-disable-line

  constructor(private _name: string) {}

  get name(): string  { //eslint-disable-line
    return this._name;
  }

  get tool(): Tool | null { //eslint-disable-line
    return this._tool;
  }

  set tool(tool: Tool | null) { //eslint-disable-line
    this._tool = tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo`);
  }
}

export class WriterMachine extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo`);
  }
}

const writer1 = new Writer('Isaque');
const pen1 = new Pen('Caneta Bic');
const machine1 = new WriterMachine('Z-500');

console.log(writer1.name);
console.log(pen1.name);
console.log(machine1.name);
writer1.tool = machine1;
writer1.write();
