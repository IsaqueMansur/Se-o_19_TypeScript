type Idade = number;
type rgbColors = 'red' | 'green' | 'blue';
type cmykColors = 'cyan' | 'magent' | 'yellow' | 'black';
type colors = rgbColors | cmykColors;
type People = {
  name: string,
  lastName: string,
  age: Idade,
  favoriteColor?: colors,
};

const people1: People = {
  name: 'Isaque',
  lastName: 'Mansur',
  age: 22,
  favoriteColor: 'black',
};

console.log(people1);
