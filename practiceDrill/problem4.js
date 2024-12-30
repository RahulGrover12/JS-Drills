// Find the top 5 costliest products ( Return an array of products )

const data = require("./objdata.js");

function costliestProduct(){
    let products = [];

    const cost = data.sort((a,b)=>b.price-a.price);
    const topFive = cost.slice(0,5);
    for(let price in topFive){
        const pro = topFive[price];
        products.push(`${pro.product_name} : ${pro.price}`)
    }
    // console.log(topFive);
    console.log(products);
}

costliestProduct();