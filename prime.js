
function prime(num) {

    for (var i = 2; i < num; i++) {

        if (num % i == 0) {

            return 'it is not a prime number';
        }
    }

    for (var i = 1; i <= num; i++) {

        return 'it is  a prime number';
    }
}

console.log(prime(2));



