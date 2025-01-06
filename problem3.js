/* ==== Problem #3 ====
The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.*/

function alphabeticalOrder(inventory) {
  return inventory.sort((a, b) => a.car_model.localeCompare(b.car_model));
}
module.exports = alphabeticalOrder;
