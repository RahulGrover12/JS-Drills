// Find the products those are available.
const data = require("./objdata");

function available(){
    for(let key in data){
        if(data[key].availability){
            console.log(`The product at index ${key} is available`);
            console.log(data[key]);
        }
    }
}
available();