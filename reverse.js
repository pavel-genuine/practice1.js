function FirstReverse(str) {

    var reversedStr = '';

    for (var i = 0; i < str.length; i++) {

        var letter = str[i];

        reversedStr = letter + reversedStr;


    }

    return reversedStr;
}



console.log(FirstReverse('i love u'));