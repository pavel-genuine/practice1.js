
var understand = true;
var understand1 = false;


for (i = 1; i < 5; i++) {

    console.log(i);
    console.log('unlock module');
    console.log('watching lectures');
    console.log('taking notes');
    console.log('practice');



    if (understand == true && i % 2 == 0) {
        console.log('keep practicing, may avoid support session');
    }

    else if (understand1 == false && i % 2 != 0) {
        console.log('go t support session');
    }

}