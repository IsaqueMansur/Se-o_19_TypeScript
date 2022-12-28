type MapStringsCallback = (item: string) => string;

export default function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  // eslint-disable-next-line
  for (const i in array) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const mappedAbc = mapStrings(abc, (item) => item.toUpperCase());
console.log(mappedAbc);
