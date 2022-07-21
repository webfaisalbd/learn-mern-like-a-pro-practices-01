// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Write my code

const strNumbers = prompt('Provide Input the numbers As Comma by Comma:');
const splitNumber = strNumbers.split(',');
console.log(splitNumber); // we get array but string of array like ['1','2','3']

// make (string of array) to (number of array)
const numberOfArray = splitNumber.map((x) => {
  return parseInt(x);
});
console.log(numberOfArray); // we get number array like [1,2,3]

let sum = 0;
for (let i = 0; i < numberOfArray.length; i++) {
  const n = numberOfArray[i];
  sum = n + sum;
}
console.log('Total: ', sum);
