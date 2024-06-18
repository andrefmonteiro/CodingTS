/*
     Given a non-empty string like "Code" return a string like "CCoCodCode".
*/

function stringSplosion(str: string): string {

     let finalString: string = "";

     for (let i = 1; i <= str.length; i++) {
          finalString += str.substring(0, i)
     }
     return finalString
}