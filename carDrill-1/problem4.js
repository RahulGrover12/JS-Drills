/* ==== Problem #4 ====
The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.*/
const carYears = [];

function carYear(inventory){
    inventory.forEach(years =>{
        carYears.push(years.car_year);
    });
    return carYears;
};

module.exports = carYear;