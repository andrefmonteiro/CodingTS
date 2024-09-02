/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr
*/


function altPairs(str: string): string {

	let finalWord: string = "";

	for (let i = 0; i < str.length; i += 4) {
		finalWord += str[i]
		if (i + 1 < str.length) {
			finalWord += str[i + 1]
		}
	}
	return finalWord;
}