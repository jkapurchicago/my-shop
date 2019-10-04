var faker = require('faker');

//var randomName = faker.name.findName(); // Rowan Nikolaus
//var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//var randomCard = faker.item(); // random contact card containing many properties
//console.log(randomCard);
//console.log(randomName, randomEmail, randomCard); 
//console.log(randomName);

//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));



i = 1;  
do {
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    console.log("Name: " + randomName + "        Email: " + randomEmail);
    i++; 
  }
  while (i <= 10); 
