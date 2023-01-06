/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

export default function unionObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };

const union = unionObjects(obj1, obj2);
console.log(union);
