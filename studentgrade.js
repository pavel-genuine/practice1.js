

function getGrade(marks) {

    if (marks >= 80 && marks <= 100) {

        return 'grade A+'
    }

    else if (marks >= 70 && marks <= 79) {

        return 'grade A'
    }
    else if (marks >= 60 && marks <= 69) {

        return 'grade B'
    }
    else if (marks >= 50 && marks <= 59) {

        return 'grade C'
    }
    else if (marks >= 40 && marks <= 49) {

        return 'grade D'
    }
    else if (marks >= 33 && marks <= 39) {

        return 'grade E'
    }
    else {

        return 'grade F'
    }
}

var result = getGrade(19);

console.log(result);