console.log("================================="); 
console.log("        WELCOME TO MY SHOP"); 
console.log("================================="); 

var faker = require('faker'); 
 for (i = 9; i >= 0; i--) {
        console.log(faker.commerce.productName() + " - $" + faker.commerce.price()); 
 }; 