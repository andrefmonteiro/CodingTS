/*
     Warmup-1 -- startOz
     Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

     Examples

     startOz('ozymandias') → oz
     startOz('bzoo') → z
     startOz('oxx') → o
*/

function startOz(str: string): string {
	return `${str[0] === "o" ? "o" : ""}${str[1] === "z" ? "z" : ""}`;
}
