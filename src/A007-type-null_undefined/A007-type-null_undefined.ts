let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName: string,
) : {
    firstName: string;
    lastName?: string;
  } {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(y: any) {
  if (typeof y === 'number') return y * y;
  return null;
}

console.log(createPerson('Isaque', 'Mansur'));
console.log(squareOf('Mansur'));
console.log(squareOf(2));
