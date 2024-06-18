/*
     Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

     Examples

     start1([1, 2, 3], [1, 3]) → 2
     start1([7, 2, 3], [1]) → 1
     start1([1, 2], []) → 1
*/

function start1(...arrays: number[][]): number {

     let oneCounter = 0;
     
     arrays.forEach(array => {
          if (array[0] === 1) oneCounter++;
     })
     return oneCounter
}