"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;

  } else if (d === 0) {
    let x = -b / (2 * a);
    return [x];

  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

console.log(solveEquation(2, 4, 0));

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (typeof (percent) !== "number" || typeof (contribution) !== "number" || typeof (amount) !== "number" || typeof (countMonths) !== "number") {
    return false;
  }

  let P = percent / 100 / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  let totalAmount = (monthlyPayment * countMonths).toFixed(2);

  return Number(totalAmount);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));