/*
     Given a string, return a new string where the first and last chars have been exchanged.

     Examples

     frontBack('code') → eodc
     frontBack('a') → a
     frontBack('ab') → ba
*/


function frontBack(str){
     // return lastChar + middle + firstChar

     if (str.length < 2){
          return str;
     }

     let firstChar = str.charAt(0);
     let lastChar = str.charAt(str.length - 1);

     return lastChar + str.substring(1, str.length - 1) + firstChar;
}