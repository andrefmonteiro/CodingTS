/*
     Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
*/

function sum2(arr: number[]): number {

     // destructuring the first 2 values of the array
     // adding a default value 0 if second value doesn't exist
     const [first = 0, second = 0] = arr;
     return first + second;
}