/*
Array-1 -- double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

Examples

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false
Solve (ctrl-enter)
*/

function double23(array: number[]): boolean {
     // implementing for performance, over array.filter()
     
     if (array.length < 2) return false;

     let twoCounter: number = 0
     let threeCounter: number = 0

     for (let i: number = 0; i < array.length; i++){
          if (array[i] === 2){
               twoCounter++
               if (twoCounter === 2) return true
          }
          else if (array[i] === 3){
               threeCounter++
               if (threeCounter === 2) return true
          }
     }
     return false
}