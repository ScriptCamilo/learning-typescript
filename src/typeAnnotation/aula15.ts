// FUNCTIONS

type MapStringsCB = (item: string) => string;

export function mapStrings(array: string[], cbfn: MapStringsCB): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    newArray.push(cbfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc); // ['a', 'b', 'c']
console.log(abcMapped); // ['A', 'B', 'C']
