console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default  (a, b) => a - b;;

export { subtract as default}; // can have 0 or 1 default exports