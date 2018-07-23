//arguments object - no long bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); // no longer defined
  return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

// const user = {
//   name: 'Thomas',
//   cities: ['York', 'New York', 'Dublin'],
//   printPlacesLived: function () { // when we add a function onto an object property, the this value is bound onto object property.
//     const that = this; // this is a workaround for the lack of binding.
//     console.log(this.name);
//     console.log(this.cities);

//     this.cities.forEach(function(city) { // when we define a regular anon function there is no bound 'this' value
//       console.log(that.name + ' has lived in ' + city);
//     })
//   }
// };

const user = {
  name: 'Thomas',
  cities: ['York', 'New York', 'Dublin'],
  printPlacesLived() { // this method has all the properties of an ES5 function, therefore the program still works correctly
    const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
    return cityMessages;

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city); 
    });
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of numbers
  numbers: [1, 2, 3],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply = return a new array where the nubmers have been multiplied
  multiply() {
    const multipliedArray = this.numbers.map((number) => number * this.multiplyBy)
    return multipliedArray;
  }
};

console.log(multiplier.multiply());