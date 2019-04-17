// I realized that my previous idea of testing whether cid was equal to change
// didn't make much sense. This is because the change would be a single number/integer,
// whereas the cid argument would always be an array. Thus, it would basically be impossible
// for the two to ever equal each other. Rather, what I need to do is use the reduce method
// on cid to calculate the sum of all the values in the drawer.

 let currencyObj = [
  {name : 'ONE HUNDRED', val: 100.00},
  {name : 'TWENTY', val: 20.00},
  {name : 'TEN', val: 10.00},
  {name : 'FIVE', val: 5.00},
  {name : 'ONE', val: 1.00},
  {name : 'QUARTER', val: 0.25},
  {name : 'DIME', val: 0.10},
  {name : 'NICKEL', val: 0.05},
  {name: 'PENNY', val: 0.01}
];
function checkCashRegister (price, cash, cid) {
let statusObj = {status: null, change: []};
let change = cash - price;
let register = cid.reduce(function(acc, current){
  acc.total += current[1];
  acc[current[0]] = current[1];
  return acc;
}, {total: 0});
}

// We can view the total amount of cash in the drawer by accessing register.total.
// I've already spent nearly four hours thinking about this problem today and doing research
// so I'm going to call it a night now.
// I'll add more notes, and try to make more progress on it tomorrow.


checkCashRegister(1900, 20000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
