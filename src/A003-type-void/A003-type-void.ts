function notReturn(...args: string[]): void {
  console.log(args.join(' '));
}

notReturn('Isaque', 'Mansur');

const people = {
  name: 'Isaque',
  lastName: 'Mansur',

  printName(): void {
    console.log(`${this.name} ${this.lastName}`);
  },
};

people.printName();

export default people;
