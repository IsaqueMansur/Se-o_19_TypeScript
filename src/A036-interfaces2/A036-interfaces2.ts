// Declaration merging

interface People {
  name: string;
}
interface People {
  readonly lastName: string;
}
interface People {
  readonly mails: readonly string[];
}
interface People {
  readonly age?: number;
}
export default People;

const people: People = {
  name: 'Isaque',
  lastName: 'Mansur',
  mails: ['Pça. Guanabara'],
  age: 22,
};

console.log(people);
