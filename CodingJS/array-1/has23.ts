/*
Array-1 -- has23
Given an int array length 2, return true if it contains a 2 or a 3.

Examples

has23([2, 5]) → true
has23([4, 3]) → true
*/

function has23(array: number[]): boolean {
     
     return array.includes(2) || array.includes(3)
}