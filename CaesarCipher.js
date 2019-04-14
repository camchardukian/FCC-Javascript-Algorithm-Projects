// I'm mostly happy with my solution for this problem.
// While FreeCodeCamp recommended using String.charCodeAt() and String.fromCharCode(),
// I wanted to attempt to create an alternative solution that did not utilize these methods.
// While I am familiar with those methods, I thought solving this problem in a more unique
//  fashion would help to demonstrate my comfort in solving intermediate algorithm problems.
// Having an alternate solution could also be useful to future programmers in seeing how a
//  problem can be solved in multiple ways depending on how it is approached.


function rot13(str) {
let arr = [];
let result = [];
 let alphaObj = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
  };

 let numerObj = {
    1 : 'A',
   2: 'B',
   3: 'C',
   4: 'D',
   5: 'E',
   6: 'F',
   7: 'G',
   8: 'H',
   9: 'I',
   10: 'J',
   11: 'K',
   12: 'L',
   13: 'M',
   14: 'N',
   15: 'O',
   16: 'P',
   17: 'Q',
   18: 'R', 
   19: 'S',
   20: 'T',
   21: 'U',
   22: 'V',
   23: 'W',
   24: 'X',
   25: 'Y',
   26: 'Z'
  };

str = str.split("");
for (let i = 0; i < str.length; i++) {
  if (alphaObj[str[i]] > 0) {
    if (alphaObj[str[i]] + 13 <= 26) {
      arr.push(alphaObj[str[i]]+13);
    }
    else if (alphaObj[str[i]] + 13 > 26) {
      arr.push(alphaObj[str[i]]-13)
    }
    }
      else {
      arr.push(str[i]);
  }
}
for (let j = 0; j < arr.length; j++) {
if (numerObj[arr[j]]) {
  result.push(numerObj[arr[j]])
}
else {
  result.push(arr[j])
}
 }
 return result.join('');
}


rot13("YOUR STRING   HERE !");

// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.