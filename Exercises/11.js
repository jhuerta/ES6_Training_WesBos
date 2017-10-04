
var lis = Array.from(document.querySelectorAll("li"));

var total = lis.map(value => minsToSeconds(value.dataset.time));
console.log(total);
var totalSum = total.reduce((value,sum) => parseInt(value) + parseInt(sum));


console.log(totalSum);

function minsToSeconds(min)
{
	var minsAndSeconds = min.split(":");
	return minsAndSeconds[0]*60 + parseInt(minsAndSeconds[1]);
}

const numbers = [3,45,23,34,5,43,568,345,23,87,9,89,67,45,345,67,45,234,9,4907,4567,34];
console.log(numbers.filter(n => n>100 && !(n%2)));