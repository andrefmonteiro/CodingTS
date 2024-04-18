/*
Array-1 -- makeEnds
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

Examples

makeEnds([1, 2, 3]) → 1,3
makeEnds([1, 2, 3, 4]) → 1,4
makeEnds([7, 4, 6, 2]) → 7,2
*/

function makeEnds(myArray: number[]): number[] {

     const finalArray: number[] = [];

     finalArray.push(myArray[0]);


          finalArray.push(myArray[myArray.length - 1]);

     return finalArray;
}