
var arr = [23, 45, 56, 67, 78, 89, 90, 222, 11, 33, 44];

console.log(Math.max(...arr));

function smallest(arr) {

    var small1 = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < small1) {

            small1 = arr[i];

        }
    }

    return small1;
}

console.log(smallest([23, 45, 56, 67, 78, 89, 90, 222, 11, 33, 44]));

function smallest2nd(arr) {

    var small1 = 11;
    var small2 = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > small1 && arr[i] < small2) {

            small2 = arr[i]


        }
    }
    return small2;
}

console.log(smallest2nd([23, 45, 56, 67, 78, 89, 90, 222, 11, 33, 44]));