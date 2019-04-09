function palindrome(str) {
  let forwards = [];
  let backwards = [];
let irr
  str = str.match(/\w/g).join("").toUpperCase();
  str = str.replace("_", "");
  str = str.replace("-", "");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    forwards.push(str[i]);
  }
   for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
if (forwards.join("") === backwards.join("")) {
  return true;
}
return false;
}



palindrome("_eygeg");

// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see my projects closer
// to today's current date.
