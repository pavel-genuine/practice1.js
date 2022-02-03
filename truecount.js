function countTrue(arr) {

    var resultArr = []

    for (var i = 0; i <= arr.length; i++) {

        if (arr[i] == true) {

            resultArr.push(true);

            var result = resultArr.length;


        }

        else if (arr.length == 0) {
            result = 0;


        }
        else if (arr[i] != true) {

            resultArr.push();
            result = resultArr.length;

        }


    }


    return result;
}

var bool = []

console.log(countTrue(bool));