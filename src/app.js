console.log('App.js is running');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two', 'Three']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

const user = {
  name: 'Thomas Hanna',
  age: 30,
  location: 'York'
};

// var user = {
//   age: 20,
// };

function getLocation (location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous' + '!'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

false && 'Some age'

returns // false