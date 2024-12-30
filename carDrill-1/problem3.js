/* ==== Problem #3 ====
The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.*/

function alphabeticalOrder(inventory){
    for(let i=0;i<inventory.length;i++){
        for(let j=i+1;j<inventory.length;j++){
            if(inventory[i].car_year>inventory[j].car_year){
                let temp = inventory[i];
                inventory[i] = inventory[j];
                inventory[j] = temp;
            }
        }
    }
    return inventory;
}

module.exports = alphabeticalOrder;
