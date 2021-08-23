// TYPE ASSERTIONS

/* Recommeded */
// Conditional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'blue';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Input field';

/* Don't Recommended */
// Type assertion
const body3 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body4 = document.querySelector('body')!; // Forbidden non-null assertion. eslint@typescript-eslint/no-non-null-assertion
body4.style.background = 'yellow';
