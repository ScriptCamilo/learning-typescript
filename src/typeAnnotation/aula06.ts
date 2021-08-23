// TUPLE

const dadosCliente1: readonly [number, string] = [1, 'Script'];
const dadosCliente2: [number, string, string] = [1, 'Script', 'Camilo'];
const dadosCliente3: [number, string, string?] = [1, 'Script'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Scritp', 'Camilo'];

console.log(dadosCliente1); // [ 1, 'Script' ]
console.log(dadosCliente2); // [ 1, 'Script', 'Camilo' ]
console.log(dadosCliente3); // [ 1, 'Script' ]
console.log(dadosCliente4); // [ 1, 'Scritp', 'Camilo' ]

// readonly Array
const array1: readonly string[] = ['Script', 'Camilo'];
const array2: ReadonlyArray<string> = ['Script', 'Camilo'];

console.log(array1); // [ 'Script', 'Camilo' ]
console.log(array2); // [ 'Script', 'Camilo' ]
