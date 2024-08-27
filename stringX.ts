/*
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

Examples

stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx
*/

// loop through every char
// get first char
// loop through each char until 2nd to last char
// get last char


function stringX(str: string): string {
	if (str.length === 0) return str;

	let editedWord: string = "";

	editedWord += str[0];

	for (let i = 1; i < str.length - 1; i++) {
		if (str[i].toLowerCase() === "x") continue;
		editedWord += str[i];
	}

	editedWord += str[str.length - 1]

	return editedWord;
}
