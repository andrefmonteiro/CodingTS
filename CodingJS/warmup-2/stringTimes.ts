/*
     Given a string and a non-negative int n, return a larger string that is n copies of the original string.

     Examples

     stringTimes('Hi', 2) → HiHi
     stringTimes('Hi', 3) → HiHiHi
     stringTimes('Hi', 1) → Hi
*/

function stringTimes(str: string, int: number): string {
     let finalString: string = "";
     for (let i = 1; i <= int; i++){
          finalString += str;
     }
     return finalString;
     
     // alternative way
     return str.repeat(int);
}
