// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Write my code

const strNumbers = prompt('Provide Input the numbers As an Array:');
const numbers = JSON.parse(strNumbers);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];
  sum = n + sum;
}
console.log('Total: ', sum);