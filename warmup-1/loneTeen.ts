/*
Warmup-1 -- loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

Examples

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
*/

function loneTeen(num1: number, num2: number) {
	// one has to be true
	// the other has to be false

	function isTeen(n: number): boolean {
		return n >= 13 && n <= 19;
	}

	return isTeen(num1) != isTeen(num2)
}
