
function vaccine(age, vaccineCount) {



    if (age >= 20 && vaccineCount == 2) {

        return 'Could go to abroad';
    }

    else if (age >= 15 && age <= 20 && vaccineCount <= 1) {


        return 'Please take vaccine';
    }

    else if (age >= 15 && age <= 20 && vaccineCount == 2) {

        let isVaccinated = true;
        console.log('3rd condditional vaccination satus: ', isVaccinated);
        return 'Could go to abroad';
    }
}



console.log('1st condition: ', vaccine(25, 2));
console.log('2nd consition: ', vaccine(17, 0));
console.log('3rd condition: ', vaccine(19, 2));





