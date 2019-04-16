// I've built a basic currency table thus far, and created a change variable with
// a formula to calculate change accurately. I've still got a LONG way to go, however.
// This problem is pretty tough and clearly shows how important breaking things
// down into small achievable blocks is. 


  let currencyUnits = [
    {name: 'ONE HUNDRED', value: 100.00},
    {name: 'TWENTY', value: 20.00},
    {name: 'TEN', value: 10.00},
    {name: 'FIVE', value: 5.00},
    {name: 'ONE', value: 1.00},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.10},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
  ];

function checkCashRegister(price, cash, cid) {
  let statusObj = {status: null, change: []};
  let change = cash - price;
  if (cid == change) {
    statusObj.status = "CLOSED"
    statusObj.change = change;
    return statusObj;
  }
else if (cid < change) {
  statusObj.status = "INSUFFICIENT_FUNDS";
  return statusObj;
}
}


checkCashRegister(1900, 20000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// This challenge was completed to the best of my abilities in April 2019. For
// a better approximation of my current abilities, please see some of the projects I've
// completed closer to today's current date.
