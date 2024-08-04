/*
     Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

     Examples

     make2([4, 5], [1, 2, 3]) → 4,5
     make2([4], [1, 2, 3]) → 4,1
     make2([], [1, 2]) → 1,2
     a = [1, 2, 3], b = [4, 5]
     [1, 2,]
*/

function make2(a: number[], b: number[]): number[] {

     /*
     an elegant solution:
          return a.concat(b).slice(0, 2);
     */

     let result: number[] = [];
     for (let i = 0; i < a.length && result.length < 2; i++) {
          result.push(a[i])
     }

     for (let i = 0; i < b.length && result.length < 2; i++) {
          result.push(b[i]);
     }

     return result;
}
