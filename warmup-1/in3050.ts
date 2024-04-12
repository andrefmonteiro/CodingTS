/*
Warmup-1 -- in3050
Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

Examples

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

function in3050(num1: number, num2: number): boolean {
	// using a helper function to improve final return readability
	function isWithinRange(
		num: number,
		lowerBound: number,
		higherBound: number
	): boolean {
		return num >= lowerBound && num <= higherBound;
	}

	return (
		(isWithinRange(num1, 30, 40) && isWithinRange(num2, 30, 40)) ||
		(isWithinRange(num1, 40, 50) && isWithinRange(num2, 40, 50))
	);
}
