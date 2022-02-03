// leap year checking 

// function getlp(year) {

//     if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
//         return 'it is leap yaer'

//     }
//     else {
//         return 'it is not leap year'

//     }
// }

// var result = getlp(2023);

// console.log(result);


// odd/even number checking 

// function getResult(num) {

//     if (num % 2 == 0 || num % 2 != 1) {

//         return ' it is even number';

//     }
//     else if (num % 2 == 1 || num % 2 != 0) {

//         return ' it is odd number';




//     }
// }

// var result = getResult(24353);
// console.log(result);

// getMIN 

// function getMin(hour) {

//     min = hour * 60;
//     return min;


// }

// var result = getMin(12)

// console.log(result);

// factorials 



function factorials(num) {

    var result = 1;

    var i = num
    for (i = 1; i <= num; i++) {

        result = result * i;
    }
    return result;

}


console.log(factorials(9));