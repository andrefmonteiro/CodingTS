/*
Array-1 -- plusTwo
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

Examples

plusTwo([1, 2], [3, 4]) → 1,2,3,4
plusTwo([4, 4], [2, 2]) → 4,4,2,2
plusTwo([9, 2], [3, 4]) → 9,2,3,4
*/

function plusTwo(array1: number[], array2: number[]): number[] {
    
     return array1.concat(array2);

     /*
     Alternative solution
          return [...array1, array2]
     */

     /*
     Alternative solution

          const finalArray: number[] = [];

          finalArray.push(...array1);
          finalArray.push(...array2);
          return finalArray;
     */
}