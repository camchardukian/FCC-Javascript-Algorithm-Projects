// UPDATE: After about 10 days of grinding, I've finally completed this project! In doing
// so, I've become much more comfortable with Javascript's reduce function, working with
// objects, and understanding JavaScript's quirkiness in dealing with numbers. While my
// solution may or may not be ideal, I've left detailed comments for you below to help
// you understand my thinking in solving this problem.

// If this problems has you as stumped as I was, hopefully you'll find my notes useful!
// Also, as of completing this project, I've dedicated approximately 500 hours of my life
// learning to code thus far. This is a bit of a random fact.

// However, if you're learning to code you may find it a rough approximation at how long
// it may take for you to get comfortable working with HTML, CSS, and vanilla JavaScript.

// Code and comment explanations start below.

//An array that lists our currency denominations and gives them a value.
let currencyDenoms = [
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
  // Using the reduce function on our cid argument allows us to calculate
  // the total amount of cash in the register. 
  let register = cid.reduce(function(acc, curr){
    // Increments our accumulator by the current value. For
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
  // the information we need to quickly return the proper outputs without
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
  // Here we setting our change array to equal whatever
  // our acc returns after we run reduce on currencyDenoms.
let change_arr = currencyDenoms.reduce(function(acc, curr){
  // We are initializing value to 0. This value represents how much change we are
  // giving out in that specific currency denomination.
        let value = 0;
  // While the value in our register of the current currency is greater than or equal to
  // the value of one unit of that currency denomination AND our change is greater than or
  // equal to the value of one unit of the current currency denomination.
  while (register[curr.name] >= curr.val && change >= curr.val) {
    // decrement change by the value of one unit of the currency denomination currently
    // operating as the curr.val.
change -= curr.val;
// decrement the money in our register by the value of one unit of the currency
// denomination currently operating as the curr.val.
register[curr.name] -= curr.val;
// increment value by the value of one unit of the currency denomination currently
// operating as the curr.val.
value += curr.val;
// Avoid inaccurate numbers in Javascript by utilizing Math.round.
change = Math.round(change*100)/100;
  }
  // If our value was successfully incremented, we'll push curr.name (the name of some 
  // currency denomination such as 'ONE HUNDRED' or 'PENNY', along with a value
  // representing how much of that currency we should give in change.)
  if (value > 0) {
    // Note that we're pushing an array as the challenge wants us to return the change
    // in the format of a two-dimensional array.
    acc.push([curr.name, value]);
  }
  // We want to return our acc so that before exiting our function we are able to return
  // any value(s) stored in acc. Note: This return statement will also prevent a TypeError
  // caused by the push property being undefined.
  return acc;
}, []);
// If there are any values in our change_arr AND our change equals 0 we will know that we
// have the ability to successfully give out change.
if (change_arr.length > 0 && change == 0) {
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}
// If either of the above conditions return false, we know that we do not have the correct
// denominations to successfully give out an appropriate amount of change.
else {
  output.status = "INSUFFICIENT_FUNDS";
return output;
}
}

// calling our function.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
["TWENTY", 60], ["ONE HUNDRED", 100]]);


// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
