// UPDATE: I've been kind of stuck in this challenge so I started from scratch, and left new 
// comments about what I've been doing. I thought this would help me try new things,
// and help me solidify my understanding of my progress thus far, by having to re-explain
// everything I've done.

//An array that lists our currency denominations and gives them a value.
currencyDenoms = [
  {name: 'ONE HUNDRED', val: 100.00},
  {name: 'TWENTY', val: 20.00},
  {name: 'TEN', val: 10.00},
  {name: 'FIVE', val: 5.00},
  {name: 'ONE', val: 1.00},
  {name: 'QUARTER', val: 0.25},
  {name: 'DIME', val: 0.10},
  {name: 'NICKEL', val: 0.05},
  {name: 'PENNY', val: 0.01},
];
// declaring our function.
function checkCashRegister(price, cash, cid) {
  // Initializing the default output our function will return.
  let output = {status: null, change: []};
  // calculating a basic formula for change.
  let change = cash - price;
  // Using the reduce function on our cid argument allows us to calculate the total amount of cash in the register. 
  let register = cid.reduce(function(acc, curr){
    // increments our accumulator by the current value of zero. For
    // example if we have 1.01 in pennies we'll add that value to
    // the total amount of change in our register.
    acc.total += curr[1];
// Here we are no longer focused on the sum of how much cash is in 
// our register. Instead we're focused on the contents of the cid and
// ensuring all of those contents along with their values
// are also included in our register variable. Example: penny -> 1.01
    acc[curr[0]] = curr[1];
    // We return the value of our acc to make it usable beyond the
    // scope of this function by attaching its values to our register
    // variable.
    return acc;
  }, //giving our reduce function an initial value of 0.
  {total: 0});
  // Accounting for some of the small value discrepancies that can occur
  // in Javascript as a result of the manner in which Javascript uses
  // binaries in dealing with numbers.
  register.total = Math.round(register.total*100)/100;
  change = Math.round(change*100)/100;

  // Below we're looking at two scenarios in which we already have all
  // the information we need to quickly return the proper values without
  // having to waste any additional time using reduce on our
  // currencyDenoms object.

  if (register.total == change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    // We don't have to adjust the value of change because we already
    // initialized output.change to an empty array and in the case of
    // insufficient funds this challenge simply wants us to return an
    // empty array.
    return output;
  }
let change_arr = currencyDenoms.reduce(function(acc, curr){
 // I know I need to do something with register, the currencyDenoms
 // array, and pushing things to this change array,
 // but I haven't quite figured out how I'm going to go about doing this yet.
}, 0)
}

// calling our function.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
["TWENTY", 60], ["ONE HUNDRED", 100]]);



// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
