/*
     Given a string, return a new string where the first and last chars have been exchanged.

     Examples

     frontBack('code') → eodc
     frontBack('a') → a
     frontBack('ab') → ba
*/

function frontBack(str: string): string {

	if (str.length < 2) {
		return str;
	}

	let firstChar: string = str.charAt(0);
	let lastChar: string = str.charAt(str.length - 1);

	return lastChar + str.substring(1, str.length - 1) + firstChar;
}
