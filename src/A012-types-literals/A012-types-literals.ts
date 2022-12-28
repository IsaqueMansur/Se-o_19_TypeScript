let x = 10;
x = 0x1011001;
const y = 10; // literal(sempre a mesma coisa)
let a = 100 as const; //eslint-disable-line
a = 100; // não aceitaria outro número pois é literalmente 100
console.log(x, a);

const people = {
  name: 'Isaque' as const,
  lastName: 'Mansur',
};

function selectColor(color: 'red'| 'green'| 'blue') : string {
  return color;
}

console.log(people);
people.name = 'Isaque'; // Só aceita Isaque
console.log(selectColor('blue')); // Só aceita as cores da lista

export default null;
