
// Setup constructor to take name and age (default to 0)
// getDescription -

class Person {
  constructor(name = 'Anonymous', age = 0) { // setups default values
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi! I am ' + this.name + '!';
    return `Hi! I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) { // setups default values
    super(name, age);            // calls the original constructor function
    this.major = major;
  }

  hasMajor() {                  // adds a new method
    if(this.major) {return this.major}
  }

  getDescription() {            // overwrites the original method
    let description = super.getDescription();   // allows you to re-use the old description
    
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi. I am Andrew Mead

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting(); // return original greeting

    if(this.homeLocation) {
      return greeting += ` I'm visiting from ${this.homeLocation}`;
    } else {
      return greeting;
    }
  }
}


const me = new Traveler('Thomas Hanna', 30, 'York');
console.log(me);
console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);
console.log(other.getDescription());
console.log(other.getGreeting());