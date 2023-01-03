/* eslint no-useless-constructor: 0 */

export default class People {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {
    this._cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf.replace(/\D/g, '');
  }

  get cpf() {
    return this._cpf;
  }
}

const people1 = new People('Isaque', 'Mansur', 22, '157-191-376-96');
people1.cpf = '789-191-376-00';
console.log(people1.cpf);
