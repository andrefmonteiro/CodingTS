/*
Array-1 -- sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

Examples

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
*/

// 2 conditions
     // length >= 1
     // array[0] === array[lastIndex]

function sameFirstLast(myArray: number[]): boolean {

     return myArray.length >= 1 && myArray[0] === myArray[myArray.length - 1];
}