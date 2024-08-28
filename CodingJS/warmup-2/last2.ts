/*
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

Examples

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1
*/

function last2(str: string): number {

	// while using substring() may be more readable, this implementation is more performant

	if (str.length < 2) return 0;

	const last2Chars = str.substring(str.length - 2)

	let counter = 0;

	for (let i = 0; i < str.length - 2; i++) {
		if (str[i] === last2Chars[0] && str[i+1] === last2Chars[1]) counter++;
	}

	return counter;
}
