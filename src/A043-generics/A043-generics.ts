/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

type Dcmt = {
  title: string;
  text: string;
  date?: Date;
}

const doc: Dcmt = {
  title: 'Title',
  text: 'Text',
};

console.log(doc);

console.log(doc.date?.toDateString());
console.log(doc.date?.toDateString() ?? 'Não existe data.');
