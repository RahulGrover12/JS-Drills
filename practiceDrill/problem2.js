// Get the array of all brand names.
const data = require("./objdata.js");

const arr = [];
function brands(){
    for(let key in data){
        arr.push(data[key].brand);
    }
    console.log(arr);
}

brands();