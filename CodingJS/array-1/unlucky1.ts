/*
Array-1 -- unlucky1
We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

Examples

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
*/

function unlucky1(array: number[]): boolean {

     if (array.length < 2) return false;

     if (array[0] === 1 && array[1] === 3 || array[1] === 1 && array[2] === 3) return true;

     if (array[array.length - 2] === 1 && array[array.length - 1] === 3) return true;

     return false;
}