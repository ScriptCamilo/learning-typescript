/* eslint-disable */
// Tipos bácisos (aqui ocorre inferência de tipos)
let nome: string = '2'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.7, -5, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol(''); // symbol
// let big: bigint = 10n; //bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 22,
  nome: 'Camilo',
};

// Funcções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
