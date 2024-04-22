/*
Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Examples

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

function posNeg(a: number, b: number, negative: boolean): boolean {
	if (negative) {
		return a < 0 && b < 0;
	}

	if (a < 0) return b > 0;
	if (a > 0) return b < 0;

	return false;
}

// refactor with rest params, if the problem was:
// Given a number of int values, return true if they are all positive or negative. Except if the parameter "negative" is true, then return true only if they're all negative.

function manyPosNeg(negative: boolean, ...nums: number[]) {
	if (negative) {
		return nums.every((n) => n < 0);
	}
	return nums.every((n) => n != 0);
}
