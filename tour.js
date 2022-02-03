function tour(budget) {
    console.log('budget', budget);
    console.log('------');

    if (budget >= 5000) {


        const hotelRent = 4000;
        let extra = budget - hotelRent;


        if (extra >= 2000) {
            console.log('Arrange BBQ party');

        }
        else {
            console.log('go for little shopping');


        }
        return 'Will go for tour';
    }

    else {

        return 'Will not go for tour'

    }

}

console.log(tour(10000));
console.log(tour(5500));
console.log(tour(4000));