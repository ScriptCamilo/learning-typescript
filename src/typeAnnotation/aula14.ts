// INTERSECTION

type HasName = { name: string };
type HasLastname = { lastname: string };
type HasAge = { age: number };
type Person = HasName & HasLastname & HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersection = AB & AC & AD; // type intersection = "A"

const person: Person = {
  name: 'Script',
  lastname: 'Camilo',
  age: 22,
};

console.log(person); // { name: 'Script', lastname: 'Camilo', age: 22 }

export { person };
