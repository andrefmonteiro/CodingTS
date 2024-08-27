/*
Given an array of ints, return true if every element is a 1 or a 4.

Examples

only14([1, 4, 1, 4]) → true
only14([1, 4, 2, 4]) → false
only14([1, 1]) → true
*/

function only14(arr: number[]): boolean {

	for (const n of arr) {
		if (n !== 1 && n !== 4) return false;
	}
	return true;
}