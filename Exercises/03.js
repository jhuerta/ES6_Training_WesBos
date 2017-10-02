// Using default values
function calculateBill(total, tax = 0.13, tip = 0.15){
	return total + total*tax + total*tip;
}

let totalBill = calculateBill(100);

console.log('Using default values in functions');
console.log(totalBill);
totalBill = calculateBill(100,undefined,0.25);
console.log(totalBill);