/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'Blue',
  vaccines: ['A001', 'A002'],
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines, color);
