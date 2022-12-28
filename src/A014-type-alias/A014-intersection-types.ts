type HaveName = {name: string};
type HaveLastName = {lastName: string}
type HaveAge = {age: number}

type People2 = HaveName | HaveLastName | HaveAge;
type People3 = HaveName & HaveLastName & HaveAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type intersection = AB & AC; // = A

const people2: People2 = {
  name: 'Isaque',
};
const people3: People3 = {
  name: 'Isaque',
  lastName: 'Mansur',
  age: 22,
};

console.log(people2);
console.log(people3);

export { people2 };
export { people3 };
