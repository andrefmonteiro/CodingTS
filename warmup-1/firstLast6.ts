/*
Array-1 -- firstLast6
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*/

function firstLast6(intArray: number[]): boolean {
     return intArray[0] === 6 || intArray[intArray.length - 1] === 6;
}