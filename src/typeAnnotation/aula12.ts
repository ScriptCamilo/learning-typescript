/* eslint-disable */
// LITERALS
let x = 10;
x = 0b1010;

const person = {
  name: 'Script' as const,
  lastName: 'Camilo',
};

// name of person can't be reassignable
person.name = 'Rodrigo'; // Type '"Rodrigo"' is not assignable to type '"Script"'

function colorChoice(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(colorChoice('Red')); // Red

// Module mode
export default 1;
