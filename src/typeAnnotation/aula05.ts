// ARRAY

// Array<T> - T[]
function multiArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multiArgs(2, 5, 6)); // 60
console.log(concatStrings('a', 'b', 'c')); //abc
console.log(toUpperCase('a', 'b', 'c')); // ['A', 'B', 'C']
