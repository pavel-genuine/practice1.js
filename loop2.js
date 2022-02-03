var day = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

var understand = [true, false, true, false, true, false, true];

for (var i = 0; i < day.length; i++) {

    console.log('........');
    console.log(i, day[i]);
    console.log('........');
    console.log(understand[i]);


    console.log('unlock module');
    console.log('watching lectures');
    console.log('taking notes');
    console.log('practice');


    if ((day[i] == 'sat' || day[i] == 'sun' || day[i] == 'mon' || day[i] == 'tue' || day[i] == 'wed' || day[i] == 'thu' || day[i] == 'fri') && understand[i] == false) {

        console.log('go to support session');


    }

    if ((day[i] == 'sun' || day[i] == 'tue' || day[i] == 'thu') && (understand[i] == false || understand[i] == true)) {

        console.log('go to conceptual session ');

    }

    if ((day[i] == 'sun' || day[i] == 'tue' || day[i] == 'thu') && understand[i] == false) {

        console.log('go to conceptual session along with support session ');

    }
}