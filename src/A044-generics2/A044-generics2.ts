/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

const arrayNumbers: Array<number> = [1, 2, 3];
console.log(arrayNumbers);

async function promoseAsync() {
  return 1;
}

promoseAsync().then((res) => console.log(res + 1));

function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise().then((res) => console.log(res));
