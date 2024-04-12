/*
Warmup-1 -- hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

Examples

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
*/

// check each of the param's values
// if in range, return true
// if none are within range, return false

function hasTeen(a: number, b: number, c: number): boolean {
	if (a >= 13 && a <= 19) return true;
	if (b >= 13 && b <= 19) return true;
	return c >= 13 && c <= 19;
}

// implementation for any number of parameters, using rest params
function anyHasTeen(...nums: number[]): boolean {
	return nums.some((n) => n >= 13 && n <= 19);
}
