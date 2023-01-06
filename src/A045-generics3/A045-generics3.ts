/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

interface ProtocolPeople<T, U> {
  name: T;
  lastName: T;
  age?: U;
}

const dev: ProtocolPeople<string, number> = {
  name: 'Isaque',
  lastName: 'Mansur',
  age: 22,
};

console.log(dev);
