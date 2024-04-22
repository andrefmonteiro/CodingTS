/*
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

Examples

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

function close10(int1: number, int2: number): number {
	const int1AbsDiff: number = Math.abs(int1 - 10);
	const int2AbsDiff: number = Math.abs(int2 - 10);

	if (int1AbsDiff === int2AbsDiff) return 0;
	if (int2AbsDiff > int1AbsDiff) return int1;
	return int2;
}
