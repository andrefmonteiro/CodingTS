/*
Array-1 -- commonEnd
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

Examples

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true
*/

function commonEnd(array1: number[], array2: number[]): boolean {

     return array1[0] === array2[0] || array1[array1.length - 1] === array2[array2.length - 1]
}