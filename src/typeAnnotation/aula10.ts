// UNKOWN

export let x: unknown;
x = 100;
x = 'Script';
x = 900;
x = '10';
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
else console.log('The type of x is not number'); // 810 OR 'The type of x is not number'
