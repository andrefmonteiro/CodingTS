/*
Array-1 -- maxTriple
Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be at least 1.

Examples

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5
*/

function maxTriple(array: number[]): number {

     const firstElement: number = array[0]
     const middleElement: number = array[Math.floor(array.length / 2)]
     const lastElement: number = array[array.length - 1]

     return Math.max(firstElement, middleElement, lastElement)
     
}