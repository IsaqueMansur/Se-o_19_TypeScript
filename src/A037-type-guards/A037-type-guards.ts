/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

export default function sum(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(sum(1, 5));
console.log(sum('a', 'b'));

type People = {name: string, type: 'people'};
type Animal = {color: string, type: 'animal'};
type PeopleOrAnimal = People | Animal;

export class Children implements People {
  type: 'people' = 'people'; //eslint-disable-line

  constructor(public name: string) {}
}

function viewName(obj: PeopleOrAnimal): void {
  /* if ('name' in obj) console.log(obj.name); */
  /* if (obj instanceof Children) console.log(obj.name); */
  switch (obj.type) {
    case 'people':
      console.log(obj.name);
      break;

    case 'animal':
      console.log(obj.color);
      break;

    default:
      break;
  }
}

viewName(new Children('Arthur'));
viewName({ color: 'red', type: 'animal' });
