/*
Warmup-1 -- notString
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

Examples

notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad
*/

// does string start with "not"?
// if so, return string
// if not, add "not " to the beginning

function notStrign(str: string): string {
	if (str.toLocaleLowerCase().startsWith("not")) return str;

	return "not " + str;
}
