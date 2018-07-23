// const square = function (x) {
//   return x * x;
// }

// console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// }

// const squareArrow = (x) => x * x;

// const squareArrow = x => x * x;


// console.log(squareArrow(5));


// Challenge - Use arrow functions
// getFirstName('Thomas Hanna') -> 'Thomas'
// Create regular arrow function
// Create arrow function using shorthand syntax

// function getFirstName (fullName) {
//   return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Thomas Hanna'));