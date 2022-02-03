
function large2nd(numbers) {

    var large1 = numbers[0];
    var large2 = numbers[0];


    for (var i = 0; i < numbers.length; i++) {

        var element = numbers[i];

        if (element > large1) {


            large1 = element

        }




        if (element < large1 && element > large2) {

            large2 = element

        }
    }


    return large2;
}



console.log(large2nd([23, 43, 56, 78, 45, 409, 404, 86, 98, 88]));