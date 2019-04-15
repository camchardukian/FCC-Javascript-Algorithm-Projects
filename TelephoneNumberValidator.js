// In the end I was sooo close to finishing this problem without any hints from FreeCodeCamp or having
// to consult any online Youtube tutorials. Unfortunately, in the end the Regex documentation just wasn't
// enough to get me through this problem. There was one edge case I just couldn't solve completely on my own.
// While solving 24 out of 25 or so tests isn't bad, I do feel a bit bummed out I couldn't solve everything
// to completion on my own. With that being said, this algorithm definitely helped to get me more comfortable
// working with Regex expressions. From what other developers have said, a problem such as this is one a junior
// developer would probably just use a library or plugin to solve instead of having to code it by hand.
// Overall, I feel I got out of this problem what I was supposed to get, and I'm looking forward to the next solution.

function telephoneCheck(str) {
let telephoneRegex = /1?[-\s_]?\(?\d{3}[-_\s)]?\s?\d{3}[-_\s]?\d{4}/g;
  return regex.test(str);
//   if (str.match(telephoneRegex)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  // I also realized upon consulting FreeCodeCamp's hints that I could use the test method for brevity
  // instead of having to combine str.match and an if else statement.
}

telephoneCheck("555 555 5555");

// telephoneCheck("555-555-5555") should return a boolean.
// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false. <-- Test that gave me massive problems.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false
// telephoneCheck("2 (757) 622-7382") should return false.
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.
