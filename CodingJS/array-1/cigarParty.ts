/*
     When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

     Examples

     cigarParty(30, false) → false
     cigarParty(50, false) → true
     cigarParty(70, true) → true
*/

function cigarParty(nCigars: number, weekend: boolean): boolean {

     if (nCigars >= 40) {
          return weekend ? true : (nCigars <= 60)
     }
     return false;

     /*
          we have 2 if checks (a number value check and a boolean value check)
          although negligible, it is technically more performant if we have the boolean check first:

          if (weekend) {
               return nCigars >= 40
          }
          return nCigars >= 40 && nCigars <= 60
     */
}