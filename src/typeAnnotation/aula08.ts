// The "never" type tell us that the function will never return anything

function createError(): never {
  throw new Error('Any Error');
}

createError();
