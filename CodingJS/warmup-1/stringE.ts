/*
Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false
*/

function stringE(str: string): boolean {
	let eCounter: number = 0;

	for (let i: number = 0; i < str.length; i++) {
		if (str.charAt(i).toLocaleLowerCase() === "e") {
			eCounter += 1;
			if (eCounter > 3) {
				return false;
			}
		}
	}

	return eCounter >= 1 && eCounter <= 3;
}
