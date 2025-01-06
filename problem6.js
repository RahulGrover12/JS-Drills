/* ==== Problem #6 ====
A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.*/

function bmwAudi(inventory) {
  const luxuryCars = inventory.filter((car) => /BMW|Audi/i.test(car.car_make));
  console.log(`Length of BMWAndAudi is: ${luxuryCars.length}`);
  return JSON.stringify(luxuryCars);
}

module.exports = bmwAudi;
