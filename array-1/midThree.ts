/*
Array-1 -- midThree
Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

Examples

midThree([1, 2, 3, 4, 5]) → 2,3,4
midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
midThree([1, 2, 3]) → 1,2,3
*/

function midThree(array: number[]): number[] {
     
     // middle = index of half of length floored
     // [1, 2, 3, 4, 5]
          // length = 5

     let finalArray: number[] = [];
     const middleIndex : number = Math.floor(array.length / 2);

     finalArray.push(array[middleIndex - 1])
     finalArray.push(array[middleIndex])
     finalArray.push(array[middleIndex + 1])

     return finalArray
}