
function average(arr) {

    var sum = 0;
    var result = 0;

    for (var i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
        result = sum / arr.length;


    }
    console.log(sum);
    console.log(arr.length);

    return result;
}

console.log(average([11, 12, 22, 23, 33, 34, 44, 45, 55, 56, 66, 67, 77, 78, 88, 89, 99]));