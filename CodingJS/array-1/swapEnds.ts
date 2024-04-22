/*
Array-1 -- swapEnds
Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

Examples

swapEnds([1, 2, 3, 4]) → 4,2,3,1
swapEnds([1, 2, 3]) → 3,2,1
swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8
*/

function swapEnds(array: number[]): number[] {

     let firstItem: number = array[0]
     let lastItem: number = array[array.length - 1]
     
     array[0] = lastItem
     array[array.length - 1] = firstItem
     
     return array
     
     // using destructuring:
          // [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
          // return array
}