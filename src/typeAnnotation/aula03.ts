// O tipo void não retorna nada
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Script',
  lastName: 'Camilo',
  fullName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Script', 'Camilo');
person.fullName();
