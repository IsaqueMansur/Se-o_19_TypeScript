const datesClient: [number, string] = [1, 'Isaque'];
const datesClient2: readonly [number, string, ...string[]] = [1, 'Isaque', 'a', 'b', 'c'];

datesClient[0] = 22;
datesClient[1] = 'Mansur';

console.log(datesClient2);

export default null;
