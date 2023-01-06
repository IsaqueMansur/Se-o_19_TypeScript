/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */
/* eslint class-methods-use-this: 0 */

export default class People<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;

  private elements: {[k: number]: T} = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter += 1;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter -= 1;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  size(): number {
    return this.counter;
  }

  viewStack(): void {
    // eslint-disable-next-line
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
const element1 = stack.pop();
stack.viewStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
