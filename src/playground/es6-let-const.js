var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar:', nameVar);

let nameLet = 'Jen';
nameLet = 'Clare'; // cannot redefine let varibles
console.log('nameLet:', nameLet);

const nameConst = 'Frank';
// nameConst = 'Gunther'; // cannot re-assign consts
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

getPetName();
// console.log(petName); // variables are function scoped

// Block scoping: bound to functions, for loops, if statements etc.

var fullName = 'Thomas Hanna';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName); // throws an error firstName is not defiend