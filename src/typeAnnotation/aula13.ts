// ALIAS

type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type ColorRBG = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRBG | ColorCMYK;

const person: Person = {
  name: 'Script',
  age: 22,
  salary: 200_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Red')); // { name: 'Script', age: 22, salary: 200000, favoriteColor: 'Red' }
console.log(person); // { name: 'Script', age: 22, salary: 200000 }
