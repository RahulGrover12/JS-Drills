/* ==== Problem #6 ====
A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.*/

const inventory = require("./inventory.js");

const BMWAndAudi = [];

function bmwAudi(inventory){
    for(let car in inventory){
        const cars = inventory[car];
        if(cars.car_make=="BMW" || cars.car_make=="Audi"){
            BMWAndAudi.push(cars);
        }
    }
    console.log(`Length of BMWAndAudi is: ${BMWAndAudi.length}`);
    return JSON.stringify(BMWAndAudi);
}

module.exports = bmwAudi;