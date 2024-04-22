/*
Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi' and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false
*/

function startHi(str: string): boolean {
	return str.substring(0, 2) === "hi" ? true : false;
	// or use String.prototype.startsWith()
}
