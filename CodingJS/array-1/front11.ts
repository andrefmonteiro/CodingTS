/*
     Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

     Examples

     front11([1, 2, 3], [7, 9, 8]) → 1,7
     front11([1], [2]) → 1,2
     front11([1, 7], []) → 1
     */

function front11(...arrs: number[][]): number[] {

     const finalArray: number[] = []
     for (const arr of arrs) {
          if (arr.length > 0) {
               finalArray.push(arr[0])
          }
     }
     return finalArray

     /* Alternative solutions
          const finalArray: number[] = []
          
          if (a.length > 0) {
               finalArray.push(a[0])
          }
          if (b.length > 0) {
               finalArray.push(b[0])
          }
          return finalArray

     const finalArray: number[] = []
     const [firstA] = a;
     const [firstB] = b;

     if (firstA != undefined) finalArray.push(firstA)
     if (firstB != undefined) finalArray.push(firstB)
     
     return finalArray

     arr is an array of all the params(also arrays)

     */
}