/*
Warmup-1 -- lastDigit
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

Examples

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
*/

// last digit == remainder of num / 10 => num % 10

function hasSameLastDigit(a: number, b: number): boolean {
	return a % 10 === b % 10;
}

// check if any given number of ints has the same last digit
function alternativeHasSameLastDigit(...nums: number[]): boolean {
	const lastDigit = nums[0] % 10;

	return nums.every((n) => n % 10 === lastDigit);
}
