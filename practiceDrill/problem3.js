// Group the products based on the category.
import data from "./objdata.js";

const categories = {};

function category(){
    for(let [key,value] of Object.entries(data)){
        if(!categories[value.category]){
            categories[value.category] = [];
        }
        categories[value.category].push(value.product_name);
    }
    console.log(categories);
}

// function category(){
//     for(let value in data){
//         const cat = data[value];
//         if(!categories[cat.category]){
//             categories[cat.category] = [];
//         }
//         categories[cat.category].push(cat.product_name);
//     }
//     console.log(categories);
// }

category();