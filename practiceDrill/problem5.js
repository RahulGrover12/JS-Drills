// Find the costliest product for each category.

const data = require("./objdata.js");

const categories = {};
function categorisedCostlyProduct(){
    for(let value in data){
        const cat = data[value];

        if(!categories[cat.category] || cat.price > categories[cat.category].price){
            categories[cat.category] = cat;
        }
    }
    console.log(categories);
}

categorisedCostlyProduct();