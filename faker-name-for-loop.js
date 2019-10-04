var faker = require('faker');

function num() { 
    for (j = 1; j <=1; j++) {
      console.log(j); 
}
}

i = 1; 
do {
    var product = faker.commerce.productName();
    var price = faker.commerce.price(); 
    console.log(product + " - "+ "$" + price); 
  
    i++; 
}
while(i <= 10); 


/*
i = 1; 
do {
    var product = faker.commerce.productName();
    var price = faker.commerce.price(); 
    console.log("The product is: " + product +". "+ "The product price is: " + "$" + price); 
  
    i++; 
}
while(i <= 10); 
*/
