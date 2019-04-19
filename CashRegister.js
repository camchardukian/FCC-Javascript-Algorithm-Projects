// I've spent a solid 12 hours programming over the last 4 days. Considering that programming
// has not been my sole focus and that I've also had many other obligations I've had to
// attend to, I'm very proud of this fact! Here's another draft with slightly more 
// progress made on this project. Yesterday I spent about 2.5 hours programming, but I
// didn't get around to posting an update on GitHub. Today I had an unexpected visit
// from a loved one so I probably won't spend more than 45 or so minutes programming today.
// With that being said, yesterday I watched a really cool video on JavaScript numbers.
// It explained why numbers in JavaScript are wacky via examples given using binaries
// and the floating point system. If you're interested in watching that video, check it
// out here: https://www.youtube.com/watch?v=MqHDDtVYJRI
// Anyway, let's get down to my own code below!

// This is an array of objects I made. I thought it was important to create such an array
// in order to know how much the value of each currency denomination is. Then, when we
// calculate change we'll know which increments in which to give the change and what
// current denominations are most suitable.
let currencyDenoms = [
  {name: 'ONE HUNDRED', val: 100.00},
  {name: 'TWENTY', val: 20.00},
  {name: 'TEN', val: 10.00},
  {name: 'FIVE', val: 5.00},
  {name: 'ONE', val: 1.00},
  {name: 'QUARTER', val: 0.25},
  {name: 'DIME', val: 0.10},
  {name: 'NICKEL', val: 0.05},
  {name: 'PENNY', val: 0.01}
];

// This is the predefined function given to us by FreeCodeCamp.
function checkCashRegister(price, cash, cid) {
// Here I created an output object that we'll return which the message and information
// we want to deliver to our users.
  let output = {status: null, change: []};
  // A basic calculation to determine how much change we should give users.
  let change = cash - price;
  // Using the reduce method to calculate how much total cash we have in our cash register
  // based upon what array of values the user passes to the cid argument.
  let register = cid.reduce(function(acc, current){
  // Here we are incrementing and eventually calculating the total amount of cash in our
  // register.
    acc.total += current[1];
    // Here, we are setting the acc's key equal to the value in current[1]. This will help
    // us to determine how much money we have in each denomination of currency.
    acc[current[0]] = current[1];
    return acc;
  }, {total: 0});
  
// I realized that by using the .toFixed() method that I could mitigate the inaccuracies
// that sometimes come about due to the limited amount of bytes in JavaScript's number
// system. In this example, I've fixed our numbers to the 2nd decimal place.
  if (register.total.toFixed(2) == change) {
  // Setting our output values based upon this use case scenario.
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  // We know that we simply don't have enough money if the total amount of cash in our
  // register is less than the change we are obligated to give.
  if (register.total.toFixed(2) < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
}



checkCashRegister(1900, 20000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
