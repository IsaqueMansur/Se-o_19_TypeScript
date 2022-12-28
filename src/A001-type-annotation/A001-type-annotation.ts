/* eslint-disable */

let name: string = 'Isaque';
let idade: number = 22;
let dev: boolean = true;
let symbol: symbol = Symbol('Algum symbol');

//Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfStrings: string[] = ['a', 'b'];

// Objects

let people: {name: string, idade: number, dev?: boolean} = {
    name: 'Isaque',
    idade: 22,
    dev: true //optional
};

// Functions 

function sum(n1: number, n2: number) {
    return n1 + n2;
}

const sumAndReturnString: (n1: number, n2: number) => string = (n1, n2) => {
    return `A soma dos números é ${n1 + n2}`;
}

console.log(sumAndReturnString(1, 2))


export default null;