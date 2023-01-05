/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */
const colorsObj = {
  red: 'red',
  green: 'green',
  blue: 'blue',
};

type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

function translateColor(color: ColorsKeys, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('red', colorsObj));
console.log(translateColor('blue', colorsObj));
