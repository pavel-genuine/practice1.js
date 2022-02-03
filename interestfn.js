

// finding interest rate by function 


function interestRate(ir, pr, yr) {

    return (ir * pr * yr) * 12 / 100;

}

console.log(interestRate(5, 1000, 5));
console.log(interestRate(12, 1234, 3));
console.log(interestRate(7, 102340, 2));