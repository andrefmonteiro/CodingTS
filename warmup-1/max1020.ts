/*
Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Examples

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

function max1020(a: number, b: number): number {
	let maxValue = 0;

	if (a >= 10 && a <= 20) {
		maxValue = a;
	}
	if (b >= 10 && b <= 20) {
		if (b > maxValue) maxValue = b;
	}

	return maxValue;
}

// refactor for rest parameters
function manyMax1020(...numbers: number[]): number {
	const filteredNumbers: number[] = numbers.filter(
		(n) => n >= 10 && n <= 20
	);
	return filteredNumbers.length != 0 ? Math.max(...filteredNumbers) : 0;
}
