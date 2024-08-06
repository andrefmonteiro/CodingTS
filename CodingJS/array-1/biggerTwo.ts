/*
     Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.
*/

function biggerTwo(a: number[], b: number[]): number[] {

     const sumA = a[0] + a[1];
     const sumB = b[0] + b[1];

     return sumB > sumA ? b : a;
}