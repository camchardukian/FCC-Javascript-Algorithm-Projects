// My initial solution to this problem was very simple, though inefficient.
// I used a seemingly endless amount of ifs and
// else ifs to account for the main roman numeral values of 1000; 500; 100 etc.
// I was very excited to have solved this problem so easily.

// However, upon testing my original solution I realized that not only was my
// solution taking up far too many lines of code, I also saw that I had forgotten that
//  roman numerals are not just added. They are also sometimes used to subtract. 
//  For example, 4 is not "IIII" but "IV". Likewise, 900 is not "DCCC" but "CM". 
//  Upon this realization I refactored my code to instead create an object with not
//   only my original list of roman numerals but also special cases in which roman numerals
//    would be formed in a "subtraction" fashion.

// Original solution begins

// function convertToRoman(num) {
//   let romanArray = [];
// do {
// if ((num - 1000) >= 0 ) {
//   num-=1000;
//   romanArray.push('M');
//   }
//   else if ((num - 500) >= 0 ) {
//   num-=500;
//   romanArray.push('D');
// }
// else if ((num - 100) >= 0 ) {
//   num-=100;
//   romanArray.push('C');
// }
// else if ((num - 50) >= 0 ) {
//   num-=50;
//   romanArray.push('L');
// }
// else if ((num - 10) >= 0 ) {
//   num-=10;
//   romanArray.push('X');
// }
// else if ((num - 5) >= 0 ) {
//   num-=5;
//   romanArray.push('V');
// }
// else if ((num - 1) >= 0 ) {
//   num-=1;
//   romanArray.push('I');
// }
// else {
//   break;
// }
// }
//  while (num > 0);
//  return romanArray.join("");
// }

//original solution ends





//Refactored solution begins

function convertToRoman(num) {
  // Object that uses roman numeral letter as keys along with numeric values that correspond with said keys.
 let numeralsObj = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1
 };
 // initializing our variable to an empty string. Eventually we will return this as our final solution.
 let romanString = "";
 // Using a for loop with key as our iterator to loop through all of the keys in our object.
for (let key in numeralsObj) {
  // If the value of num is less than the value that corresponds with the current key, that key (which is really a single letter in our roman numeral output) will be added to the romanString which will eventually be returned.
  while (num >= numeralsObj[key]) {
    romanString += key;
    // Note that we are subtracting the value of the current key. For example, if we just added 'M' to our romanString we would subtract the corresponding value of 1000 from the value of num. This step is CRUCIAL because without it we would repeatedly add the same number because we would have accidentally created an infinite loop.
    num -= numeralsObj[key];
  }
}
return romanString;
}

convertToRoman(1001);

//Refactored solution ends

// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
