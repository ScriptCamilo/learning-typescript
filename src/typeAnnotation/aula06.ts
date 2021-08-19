// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Script'];
const dadosCliente2: [number, string, string] = [1, 'Script', 'Camilo'];
const dadosCliente3: [number, string, string?] = [1, 'Script'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Scritp', 'Camilo'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly Array
const array1: readonly string[] = ['Script', 'Camilo'];
const array2: ReadonlyArray<string> = ['Script', 'Camilo'];

console.log(array1);
console.log(array2);
