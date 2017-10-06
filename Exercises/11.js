/* eslint-disable  max-len */

function minsToSeconds(min) {
  const minsAndSeconds = min.split(':');
  return (minsAndSeconds[0] * 60) + parseInt(minsAndSeconds[1], 10);
}

const lis = Array.from(document.querySelectorAll('li'));

const total = lis.map(value => minsToSeconds(value.dataset.time));
console.log(total);
const totalSum = total.reduce((value, sum) => parseInt(value, 10) + parseInt(sum, 10));


console.log(totalSum);


const numbers = [3, 45, 23, 34, 5, 43, 568, 345, 23, 87, 9, 89, 67, 45, 345, 67, 45, 234, 9, 4907, 4567, 34];

console.log(numbers.filter(n => n > 100 && !(n % 2)));

// const hola = 'dfasdf';
