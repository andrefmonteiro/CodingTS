/*
Array-1 -- rotateLeft3
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

Examples

rotateLeft3([1, 2, 3]) → 2,3,1
rotateLeft3([5, 11, 9]) → 11,9,5
rotateLeft3([7, 0, 0]) → 0,0,7
*/

// shift elements to the left = reducing their index by 1
// if it's index 0, then it goes to the end
// i know that there's a JS array method that assumes negative indices as counting from the end
//e.g. if an element is given the index -1, then it's either the last one or the second to last one


function rotateArrayLeft(intArray: number[]): number[] {

     const newArray: number[] = [...intArray]

     const firstElement: number = newArray.shift() as number
     newArray.push(firstElement)

     return newArray
}