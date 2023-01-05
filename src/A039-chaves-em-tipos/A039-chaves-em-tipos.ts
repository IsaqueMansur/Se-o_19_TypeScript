/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

type Vehicle = {
  year: number;
  brand: string;
};

type Car = {
  ano: Vehicle['year'];
  marca: Vehicle['brand'];
  nome: string;
}

const car: Car = {
  marca: 'Ford',
  ano: 2023,
  nome: 'Ford Fusion',
};

console.log(car);
