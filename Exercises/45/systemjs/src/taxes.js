export function getTax(amount, tax = 0.15)
{
	return amount*(1 + tax);
}